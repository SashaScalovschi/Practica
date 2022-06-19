import React from "react"
import TeamCard from "./TeamCard"
import "./team.css"
import '../../App.css'

export const Contact = () => {
  return (
    <>
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
    </>
  )
}

export default Contact