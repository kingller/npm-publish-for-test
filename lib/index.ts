import _ from 'lodash';

export default function test(): string[] {
    const keys = _.keys({ a: 1, b: 3 });
    return keys;
}
