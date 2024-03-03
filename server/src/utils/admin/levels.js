export function getPowerLevel(rank) {
    switch (rank) {
        case 'admin':
            return 100;
        case 'member':
            return 10;
        case 'guest':
            return 0;
    }
}
