import React from 'react'
import vg from "../assets/2.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,
    AiFillYoutube,AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
    <>
    <div className='home'>
      <main>
        <h1>Home</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className='home2' id='contact'>
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your one and only solutions to the tech problems
                you face
                every day. We are leading tech company whose aim is to increase the 
                problem solving ability in children.
            </p>
        </div>

    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quia repellendus, eveniet commodi accusantium atque nihil sapiente voluptatem sequi dicta modi deserunt voluptate, laboriosam alias
                 animi, placeat excepturi. Veritatis culpa dolorum, ipsa explicabo beatae et! Iure nisi velit sequi labore!
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolor unde voluptas reprehenderit vero molestias impedit. Vitae placeat qui, saepe totam consequuntur quaerat aspernatur facilis ex atque aut tempora consectetur.
                 </p>
        </div>
    </div>

    <div className="home4" id='brands'>
    <div>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay: "0.3s",
            }
            }>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>

            <div style={{
                animationDelay: "0.5s",
            }
            }>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>

            <div style={{
                animationDelay: "0.7s",
            }
            }>
                <AiFillYoutube />
                <p>Youtube</p>
            </div>

            <div style={{
                animationDelay: "1s",
            }
            }>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
        </article>

        </div>
    </div>
    </>
  )
}

export default Home
