import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <div className="w-full">
            <div className="container m-auto px-10 flex justify-between">
                <h1>LOGO</h1>
                <nav className='flex gap-5'>
                    <Link to='/'>Home</Link>
                    <Link to='/control'>Control</Link>

                </nav>
            </div>

        </div>
    )
}