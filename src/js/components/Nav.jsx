import React from 'react'

class Nav extends React.Component {
    render(){
        return (
            <nav>
                <div>
                    <Link to="/listener">Listener</Link>
                    <Link to="/emitter">Emitter</Link>
                </div>
            </nav>
        )
    }
}

export default Nav