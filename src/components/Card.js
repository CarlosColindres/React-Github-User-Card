import React from 'react'

const Card = ({userData}) => {
    return (
        <div className='card'>
            <div className="content-card">
                <div className="top-card">
                    <img src={userData.avatar_url} alt="user"/>
                    <h1>Carlos Colindres</h1>
                    <h2>@{userData.login}</h2>
                    <p>Software Student</p>
                </div>
                <div className="bottom-card">
                    <div>
                        <h2>{userData.followers}</h2>
                        <p>Followers</p>
                    </div>
                    <div>
                    <h2>{userData.following}</h2>
                        <p>Following</p>
                    </div>
                    <div>
                        <h2>{userData.public_repos}</h2>
                        <p>Repositories</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
