import { Capability } from 'ircv3';

// This capability mostly just enables standard IRC commands that Twitch chose to disable by default
// It has no message types on its own
const TwitchMembershipCapability: Capability = {
	name: 'twitch.tv/membership'
};

export default TwitchMembershipCapability;
