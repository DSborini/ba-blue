import React from 'react';
import AvatarCard from '../components/avatarCard';

const AvatarSelection = () => {
    return (
        <div>
            <h1>Avatar Selection</h1>
            <div>
                {/* Render multiple AvatarCard components here */}
                <AvatarCard />
                <AvatarCard />
                <AvatarCard />
            </div>
        </div>
    );
};

export default AvatarSelection;