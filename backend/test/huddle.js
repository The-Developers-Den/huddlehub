const { expect } = require("chai")

describe("Huddle1", function () {
    // beforeEach(async function () {
    //     const [owner, alice, bob] = await ethers.getSigners()
    //     const Huddle1 = await ethers.getContractFactory("Huddle1")
    //     const huddle1 = await Huddle1.deploy()
    //     await huddle1.deployed()
    // })

    describe("createUser", function () {
        it("should create a new user", async function () {
            const [owner, alice, bob] = await ethers.getSigners()
            const Huddle1 = await ethers.getContractFactory("Huddle1")
            const huddle1 = await Huddle1.deploy()

            const username = "alice"
            const metadata = "some metadata"

            await huddle1.createUser(username, metadata)

            const users = await huddle1.getUsers()
            expect(users.length).to.equal(1)
            expect(users[0].id).to.equal(0)
            expect(users[0].username).to.equal(username)
            expect(users[0].account).to.equal(alice.address)
            expect(users[0].metadata).to.equal(metadata)
        })
    })

    describe("createPost", function () {
        it("should create a new post", async function () {
            const content = "some content"

            await huddle1.createPost(content)

            const posts = await huddle1.getPost()
            expect(posts.length).to.equal(1)
            expect(posts[0].id).to.equal(0)
            expect(posts[0].owner).to.equal(owner.address)
            expect(posts[0].content).to.equal(content)
            expect(posts[0].created).to.be.above(0)
        })
    })

    describe("getPostsByUser", function () {
        it("should return all posts by the calling user", async function () {
            const aliceContent = "Alice's post"
            const bobContent = "Bob's post"

            await huddle1.createPost(aliceContent)
            await bob.sendTransaction({ to: huddle1.address, value: ethers.utils.parseEther("1") })
            await huddle1.createPost(bobContent)

            const alicePosts = await huddle1.connect(alice).getPostsByUser()
            expect(alicePosts.length).to.equal(1)
            expect(alicePosts[0].id).to.equal(0)
            expect(alicePosts[0].owner).to.equal(alice.address)
            expect(alicePosts[0].content).to.equal(aliceContent)
            expect(alicePosts[0].created).to.be.above(0)

            const bobPosts = await huddle1.connect(bob).getPostsByUser()
            expect(bobPosts.length).to.equal(1)
            expect(bobPosts[0].id).to.equal(1)
            expect(bobPosts[0].owner).to.equal(bob.address)
            expect(bobPosts[0].content).to.equal(bobContent)
            expect(bobPosts[0].created).to.be.above(0)
        })
    })
})
