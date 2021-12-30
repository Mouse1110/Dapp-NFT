// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract BuildingAuction is ERC721{
    using Strings for uint256;
    constructor() ERC721("ObjectNFT","O"){}
    struct Object{
        string name;
        string point;
    }

    //Variable
    string domain = "";
    mapping(uint256=>Object) object;
    // Event

    // Function
    function create(string memory _name,string memory _point,uint256 _tokenId) public {
        if(_exists(_tokenId)){
            revert("token exists");
        }
        object[_tokenId] = Object(_name,_point);
        _mint(msg.sender,_tokenId);
    }

     function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId),"TokenID khong ton tai");
        if (bytes(domain).length>0){
            return string(abi.encodePacked(domain,tokenId.toString()));
        } else
        return "";
    }

    function find(uint256 _tokenId) public view returns (string memory,string memory){
        if(!_exists(_tokenId)){
            revert("token not exists");
        }
        return (object[_tokenId].name,object[_tokenId].point);
    }
}