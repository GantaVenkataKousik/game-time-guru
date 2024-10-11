import React from 'react';
import LeftContent from './leftContent/LeftContent';
import RightContent from './rightContent/RightContent';


function Content() {
    return (
        <section className="create-content">
            <LeftContent />
            <RightContent />
        </section>
    );
}

export default Content;
