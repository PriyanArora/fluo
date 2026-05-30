// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ChainOpsLedger {
    uint256 private eventCount;

    event AuditLogged(
        uint256 indexed eventId,
        string indexed projectId,
        string indexed entityId,
        string eventType,
        string payloadHash,
        address actor,
        uint256 timestamp
    );

    function logEvent(
        string memory projectId,
        string memory entityId,
        string memory eventType,
        string memory payloadHash
    ) public {
        eventCount += 1;

        emit AuditLogged(
            eventCount,
            projectId,
            entityId,
            eventType,
            payloadHash,
            msg.sender,
            block.timestamp
        );
    }

    function getEventCount() public view returns (uint256) {
        return eventCount;
    }
}
