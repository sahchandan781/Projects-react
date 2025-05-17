import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <h1>Projects</h1>
        <button><Link to={'/otp-validator'}>Otp Validator</Link></button>
        <button><Link to={'/progress-bar'}>Progress Bar</Link></button>
        <Link to={'/todolist'}><button>Todo List</button></Link>
        <Link to={'/contact'}><button>Contact</button></Link>
        <Link to={'/chipinput'}><button>Chips</button></Link>
        <Link to={'/diceroller'}><button>Dice Roller</button></Link>
        <Link to={'/passwordstrength'}><button>Password Strength</button></Link>
        <Link to={'/mortage'}><button>Mortage Calculator</button></Link>
        <Link to={'/recipefilter'}><button>Recipe filter</button></Link>
        <Link to={'/tictactoe'}><button>Tic Tac Toe</button></Link>
    </div>
  )
}

export default Home