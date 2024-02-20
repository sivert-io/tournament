export function getPowerLevel(rank: 'admin' | 'member' | 'guest') {
    switch (rank) {
        case 'admin':
            return 100;
        
        case 'member':
            return 10;
        
        case 'guest':
            return 0;
    }
}