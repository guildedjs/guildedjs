import type { APIGroup } from '@guildedjs/guilded-api-typings';

import type { Client } from '../Client';
import { Group } from '../Group';
import type { Team } from '../Team';
import { BaseManager } from './BaseManager';

export class TeamGroupManager extends BaseManager<APIGroup, Group> {
    public constructor(client: Client, public readonly team: Team) {
        super(client, Group, { maxSize: client.options?.cache?.cacheMaxSize?.groupsCache });
    }

    public static resolve(group: string | Group): string {
        return group instanceof Group ? group.id : group;
    }
}
