import React from 'react'
import FacultyCard from "../components/Faculty/FacultyCard"
import Card from '../components/Team/Card'

function TeamPage() {
    return (
        <div>
        <   div className='title'>Faculty InCharge</div>
                <FacultyCard />
            <div className='title'>Present Team</div>
                <Card />
        </div>

    );
}

export default TeamPage;