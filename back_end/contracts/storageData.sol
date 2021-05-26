pragma solidity ^0.5.16;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

contract StorageData {
    string name;

    function doSomething() public pure returns (string memory _test) {
        _test = "do something for your bright future.";
        return _test;
    }

    function doSomething1() public pure returns (uint _test) {
        _test = 1;
        return _test;
    }

    function setData(string memory _name) public {
        name = _name;
    }

    function getData() public view returns (string memory _name) {
        return name;
    }
}
