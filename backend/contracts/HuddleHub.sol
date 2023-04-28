pragma solidity ^0.8.0;

contract Huddle1 {
    struct User {
        uint id;
        string username;
        address account;
    }
    
    struct Post {
        uint id;
        address owner;
        string content;
        uint created;
    }

    mapping(uint => User) private users;
    mapping(uint => Post) private posts;

    uint nextUserId = 0;
    uint nextPostId = 0;

    event UserCreated(uint id, string username, address account);
    event PostCreated(uint id, address owner,string content, uint created);

     function createUser(string memory name) public {
        uint id = nextUserId;
        users[id] = User(id, name, msg.sender);
        nextUserId += 1;
        emit UserCreated(id, name, msg.sender);
    }

    function createPost(string memory content) public  {
        // require(users[].account == msg.sender, "Only the node owner can create posts");
        uint id = nextPostId;
        posts[id] = Post(id,msg.sender,content, block.timestamp);
        nextPostId += 1;
        emit PostCreated(id,msg.sender,content, block.timestamp);
        
    }
     function getPostsByUser() public view returns ( Post[] memory) {
        Post[] memory userPosts = new Post[](nextPostId);
        uint numPosts = 0;
        for (uint i = 0; i < nextPostId; i++) {
            if (posts[i].owner == msg.sender) {
                userPosts[numPosts] = posts[i];
                numPosts += 1;
            }
        }
         Post[] memory result = new  Post[](numPosts);
        for (uint i = 0; i < numPosts; i++) {
            result[i] = userPosts[i];
        }
        return result;
    }

    function getPost() public view returns ( Post[] memory) {

         Post[] memory result = new  Post[](nextPostId);
        for (uint i = 0; i < nextPostId; i++) {
            result[i] = posts[i];
        }
        return result;
    } 
}
