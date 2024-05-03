export function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'm';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    } else {
        return num.toString();
    }
}

export function areObjectsEqual(obj1: { [key: string]: any }, obj2: { [key: string]: any }): boolean {
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
            return false;
        }
    }

    for (const key in obj2) {
        if (obj1.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}