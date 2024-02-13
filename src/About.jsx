import React from 'react'
import "./About.css"
import unImg from "../src/img/UN3.webp"
import passPort from "../src/img/passp.jpeg"
import Navbar from './Navbar'






const About = () => {
  return (
    <div className="about">
        <Navbar />
        <div class="container">
            <div class="row align-items-center justify-content-center">
            <div class="col-md-7 text-center">
            <h2 class="heading">About The Organization</h2>
            </div>
            </div>
        </div>

        <br /> <br />



        <div class="site-section mb-5">
                <div class="container">
                <div class="row mb-5">
                <div class="col-md-12 mb-5">
                    <br /><br />
                <img src={unImg}  alt="Image placeholder" class="img-fluid" />
                </div>
                <div class="col-md-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam <br /> vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.</p>

                <p>Quia ratione, eum harum ab similique mollitia, nisi itaque vel <br /> voluptas ipsam dolore perferendis. Deleniti voluptatum error <br /> possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae <br /> molestiae reprehenderit harum nesciunt.</p>

                <p>Pariatur non consectetur libero, veniam inventore officia neque ipsum vel vitae repudiandae doloribus odit nihil dicta sit, magnam eos, in asperiores consequuntur eaque atque nam error. Dignissimos porro veniam voluptate.</p>
                </div>
                <div class="col-md-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.</p>
                <p>Quia ratione, eum harum ab similique mollitia, nisi itaque vel voluptas ipsam dolore perferendis. Deleniti voluptatum error possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae molestiae reprehenderit harum nesciunt.</p>
                </div>
                </div>
                <div class="row mt-5">
                <div class="col-md-12 mb-5 text-center mt-5">
                <h2>Our Founders</h2>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="block-38 text-center">
                <div class="block-38-img">
                <div class="block-38-header">
                <img src={passPort} alt="Image placeholder" />
                <h3 class="block-38-heading">Elizabeth Graham</h3>
                <p class="block-38-subheading">CEO</p>
                </div>
                <div class="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="block-38 text-center">
                <div class="block-38-img">
                <div class="block-38-header">
                <img src={passPort}  alt="Image placeholder" />
                <h3 class="block-38-heading">Jennifer Greive</h3>
                <p class="block-38-subheading">President</p>
                </div>
                <div class="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="block-38 text-center">
                <div class="block-38-img">
                <div class="block-38-header">
                <img src={passPort} alt="Image placeholder" />
                <h3 class="block-38-heading">Patrick Marx</h3>
                <p class="block-38-subheading">Marketer</p>
                </div>
                <div class="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="block-38 text-center">
                <div class="block-38-img">
                <div class="block-38-header">
                <img src={passPort}  alt="Image placeholder" />
                <h3 class="block-38-heading">Mike Coolbert</h3>
                <p class="block-38-subheading">Partner</p>
                </div>
                <div class="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
</div>







    </div>
  )
}

export default About
