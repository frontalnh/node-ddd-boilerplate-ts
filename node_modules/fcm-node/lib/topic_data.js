function TopicData(topicName, registration_tokens) {
    return {
        to: `/topics/${topicName}`,
        registration_tokens
    };
}

module.exports = TopicData;