import React from 'react'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react';

const slug = () => {
  // const router = useRouter();
  // const { slug } = router.query
  
  
  
 

  
   
   

  const comment_arr = [
    {
      immage:'/images/1-7-600x400.webp',
      username: 'SamsoNagaro',
      date: 'April 14, 2019',
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
      immage:'/images/2-7-600x400.webp',
      username: 'Jonty Andrews',
      date: 'March 13, 2020',
      comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over'
    },
    {
      immage:'/images/3-7-600x400.webp',
      username: 'Sarah Tim',
      date: 'Jan 20, 2020',
      comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
    },
    {
      username: 'Samso Nagaro',
      date: 'March 20, 2020',
      comment: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The'
    }
  ]



  const array = [
    <div class="entry-content">

      <header aria-label="Newsletter header">
        <h1 class="text-display-large-bold pt6" dir="ltr">Take the Next Step!1</h1>
      </header>
      <div class="relative reader__grid mt6">
        <div>
          <div class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme" dir="ltr">
            <p class="reader-text-block__paragraph">From one question, <em>Are the children prepared to defend their faith after high school?</em> Wanda and Terence started on a journey that would change their lives and others. Little did they know, 21 years later, they would provide family discipleship training for over 100,000 parents worldwide on five continents.</p>
            <p class="reader-text-block__paragraph">Terence was an executive in corporate America with The Coca-Cola Company. He decided to prioritize his marriage and family for their spiritual development. Never a thought to form an entity he set out to bring his children up in the faith and to be the primary disciple of his children. One workshop led to another, and they were off and running into thousands of churches across the country.</p>
            <p class="reader-text-block__paragraph">During this time, Terence and Wanda discovered that 75% of post high school graduates were walking away from the faith and more importantly 83% of Christian parents felt inadequate to share their faith with their children. Having led Fortune 500 companies and serving as an Elder in his local church, the Lord started him on a journey to change the tide of spiritual decay in the home. Terence and Wanda were surprised by how drawn parents were to their family discipleship process.</p>
            <h3 class="reader-text-block__heading2">From their Family to thousands of families worldwide</h3>
            <p class="reader-text-block__paragraph">As family champions, Terence and Wanda were deeply impacted by the teachings of Bible Study Fellowship (BSF) and discipleship training at their local church. So, the Chatmon’s saw an opportunity to reach other parents who desired a strong healthy flourishing family. Family transformation started with teaching parents how to write a written family discipleship plan for their home. Then later, they discovered that training without an ongoing coaching process would not produce the results desired so they started a Master Family Champion discipleship coaching process that extends over a three-year period. “God allows you to train a few and they multiply by training parents in workshops and coaching them over a 90-minutes virtual session monthly. A small seed planted in his home became a fruitful harvest worldwide.” quoted Terence.</p>
            <h3 class="reader-text-block__heading2"><strong>Take the Next Step&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">Poised to take the next step, the Lord is calling the Chatmon’s through the nonprofit Do Your Children Believe, Inc aka Victorious Family to reach 9.2M families by 2025. Their Family Discipleship HomeKit and One-Day Workshops are two tools to accelerate the plan. Over time, through their Master Family Champion certification program, Victorious Family is positioned to reach millions of families in their own language with contextualized material.</p>
            <p class="reader-text-block__paragraph">Victorious Family has its sights on much more. This April 19th at the World of Coca-Cola –&nbsp;<a href="https://victoriousfamily.org/takethenextstep/">Next Steps – Victorious Family</a> – they are launching a $10.3M fundraising campaign to reach the 1.4M families who desire their training workshops and discipleship coaching. As they look forward to translating their material into eight new languages – Spanish, French, German, Mandarin, Arabic, Urdo, Italian, and Portuguese many more parents can be reached worldwide. “The border has no boundaries as we build a virtual platform to reach millions across the world.” says Terence Chatmon.</p>
            <p class="reader-text-block__paragraph">They built Victorious Family on Christian values and encouraged organizations such as Focus on the Family, FamilyLife, and thousands of Churches to jump on board. Now through their&nbsp;<a href="https://mygiving.secure.force.com/GXDonateNow?id=a0U0H00000ax4U8UAI&amp;fbclid=IwAR0zMxoxof7VSJNknRjw79Wt1-6p_2pJ7NvS3viQVaV9OFkoX_FT1whwWEk">MyGiving with NCF – Donate (force.com)</a>&nbsp;(Giving Fund) they are asking people and foundations to get involved in this transformational work of the family. One family at a time through one family discipleship plan at a time.</p>
            <p class="reader-text-block__paragraph">With your help and financial support families nationwide and beyond can begin to flourish.</p>
            <h3 class="reader-text-block__heading2">Join Us in Atlanta, GA April 19th.</h3>
            <p class="reader-text-block__paragraph">Victorious Family is inviting you to join Terence and Wanda on April 19, 2023. They will host an anniversary gala and vision dinner at the World of Coca-Cola in Atlanta, GA, to celebrate the impact of the past five years but also to share where the Lord is calling Victorious Family to&nbsp;<em>“Take the Next Step!”</em>&nbsp;&nbsp;Together we can shift the tide of family decay in our nation.</p>
            <p class="reader-text-block__paragraph">Prioritize this Distinct Experience. Reserve your seat or table today at&nbsp;<a href="https://www.eventbrite.com/e/take-the-next-step-tickets-504798043537">Take the Next Step Tickets, Wed, Apr 19, 2023 at 6:00 PM | Eventbrite</a></p>
            <p class="reader-text-block__paragraph">P:S Victorious Family HomeKit –&nbsp;<a href="https://victoriousfamily.org/homekit/">Family Home Kit – Victorious Family</a></p>

          </div>
        </div>
      </div>
    </div>
    ,
    <div class="entry-content">

    <header aria-label="Newsletter header">
      <h1 class="text-display-large-bold pt6" dir="ltr">Take the Next Step!2</h1>
    </header>
    <div class="relative reader__grid mt6">
      <div>
        <div class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme" dir="ltr">
          <p class="reader-text-block__paragraph">From one question, <em>Are the children prepared to defend their faith after high school?</em> Wanda and Terence started on a journey that would change their lives and others. Little did they know, 21 years later, they would provide family discipleship training for over 100,000 parents worldwide on five continents.</p>
          <p class="reader-text-block__paragraph">Terence was an executive in corporate America with The Coca-Cola Company. He decided to prioritize his marriage and family for their spiritual development. Never a thought to form an entity he set out to bring his children up in the faith and to be the primary disciple of his children. One workshop led to another, and they were off and running into thousands of churches across the country.</p>
          <p class="reader-text-block__paragraph">During this time, Terence and Wanda discovered that 75% of post high school graduates were walking away from the faith and more importantly 83% of Christian parents felt inadequate to share their faith with their children. Having led Fortune 500 companies and serving as an Elder in his local church, the Lord started him on a journey to change the tide of spiritual decay in the home. Terence and Wanda were surprised by how drawn parents were to their family discipleship process.</p>
          <h3 class="reader-text-block__heading2">From their Family to thousands of families worldwide</h3>
          <p class="reader-text-block__paragraph">As family champions, Terence and Wanda were deeply impacted by the teachings of Bible Study Fellowship (BSF) and discipleship training at their local church. So, the Chatmon’s saw an opportunity to reach other parents who desired a strong healthy flourishing family. Family transformation started with teaching parents how to write a written family discipleship plan for their home. Then later, they discovered that training without an ongoing coaching process would not produce the results desired so they started a Master Family Champion discipleship coaching process that extends over a three-year period. “God allows you to train a few and they multiply by training parents in workshops and coaching them over a 90-minutes virtual session monthly. A small seed planted in his home became a fruitful harvest worldwide.” quoted Terence.</p>
          <h3 class="reader-text-block__heading2"><strong>Take the Next Step&nbsp;</strong></h3>
          <p class="reader-text-block__paragraph">Poised to take the next step, the Lord is calling the Chatmon’s through the nonprofit Do Your Children Believe, Inc aka Victorious Family to reach 9.2M families by 2025. Their Family Discipleship HomeKit and One-Day Workshops are two tools to accelerate the plan. Over time, through their Master Family Champion certification program, Victorious Family is positioned to reach millions of families in their own language with contextualized material.</p>
          <p class="reader-text-block__paragraph">Victorious Family has its sights on much more. This April 19th at the World of Coca-Cola –&nbsp;<a href="https://victoriousfamily.org/takethenextstep/">Next Steps – Victorious Family</a> – they are launching a $10.3M fundraising campaign to reach the 1.4M families who desire their training workshops and discipleship coaching. As they look forward to translating their material into eight new languages – Spanish, French, German, Mandarin, Arabic, Urdo, Italian, and Portuguese many more parents can be reached worldwide. “The border has no boundaries as we build a virtual platform to reach millions across the world.” says Terence Chatmon.</p>
          <p class="reader-text-block__paragraph">They built Victorious Family on Christian values and encouraged organizations such as Focus on the Family, FamilyLife, and thousands of Churches to jump on board. Now through their&nbsp;<a href="https://mygiving.secure.force.com/GXDonateNow?id=a0U0H00000ax4U8UAI&amp;fbclid=IwAR0zMxoxof7VSJNknRjw79Wt1-6p_2pJ7NvS3viQVaV9OFkoX_FT1whwWEk">MyGiving with NCF – Donate (force.com)</a>&nbsp;(Giving Fund) they are asking people and foundations to get involved in this transformational work of the family. One family at a time through one family discipleship plan at a time.</p>
          <p class="reader-text-block__paragraph">With your help and financial support families nationwide and beyond can begin to flourish.</p>
          <h3 class="reader-text-block__heading2">Join Us in Atlanta, GA April 19th.</h3>
          <p class="reader-text-block__paragraph">Victorious Family is inviting you to join Terence and Wanda on April 19, 2023. They will host an anniversary gala and vision dinner at the World of Coca-Cola in Atlanta, GA, to celebrate the impact of the past five years but also to share where the Lord is calling Victorious Family to&nbsp;<em>“Take the Next Step!”</em>&nbsp;&nbsp;Together we can shift the tide of family decay in our nation.</p>
          <p class="reader-text-block__paragraph">Prioritize this Distinct Experience. Reserve your seat or table today at&nbsp;<a href="https://www.eventbrite.com/e/take-the-next-step-tickets-504798043537">Take the Next Step Tickets, Wed, Apr 19, 2023 at 6:00 PM | Eventbrite</a></p>
          <p class="reader-text-block__paragraph">P:S Victorious Family HomeKit –&nbsp;<a href="https://victoriousfamily.org/homekit/">Family Home Kit – Victorious Family</a></p>

        </div>
      </div>
    </div>
  </div>
   ,
   <div class="entry-content">

   <header aria-label="Newsletter header">
     <h1 class="text-display-large-bold pt6" dir="ltr">Take the Next Step!3</h1>
   </header>
   <div class="relative reader__grid mt6">
     <div>
       <div class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme" dir="ltr">
         <p class="reader-text-block__paragraph">From one question, <em>Are the children prepared to defend their faith after high school?</em> Wanda and Terence started on a journey that would change their lives and others. Little did they know, 21 years later, they would provide family discipleship training for over 100,000 parents worldwide on five continents.</p>
         <p class="reader-text-block__paragraph">Terence was an executive in corporate America with The Coca-Cola Company. He decided to prioritize his marriage and family for their spiritual development. Never a thought to form an entity he set out to bring his children up in the faith and to be the primary disciple of his children. One workshop led to another, and they were off and running into thousands of churches across the country.</p>
         <p class="reader-text-block__paragraph">During this time, Terence and Wanda discovered that 75% of post high school graduates were walking away from the faith and more importantly 83% of Christian parents felt inadequate to share their faith with their children. Having led Fortune 500 companies and serving as an Elder in his local church, the Lord started him on a journey to change the tide of spiritual decay in the home. Terence and Wanda were surprised by how drawn parents were to their family discipleship process.</p>
         <h3 class="reader-text-block__heading2">From their Family to thousands of families worldwide</h3>
         <p class="reader-text-block__paragraph">As family champions, Terence and Wanda were deeply impacted by the teachings of Bible Study Fellowship (BSF) and discipleship training at their local church. So, the Chatmon’s saw an opportunity to reach other parents who desired a strong healthy flourishing family. Family transformation started with teaching parents how to write a written family discipleship plan for their home. Then later, they discovered that training without an ongoing coaching process would not produce the results desired so they started a Master Family Champion discipleship coaching process that extends over a three-year period. “God allows you to train a few and they multiply by training parents in workshops and coaching them over a 90-minutes virtual session monthly. A small seed planted in his home became a fruitful harvest worldwide.” quoted Terence.</p>
         <h3 class="reader-text-block__heading2"><strong>Take the Next Step&nbsp;</strong></h3>
         <p class="reader-text-block__paragraph">Poised to take the next step, the Lord is calling the Chatmon’s through the nonprofit Do Your Children Believe, Inc aka Victorious Family to reach 9.2M families by 2025. Their Family Discipleship HomeKit and One-Day Workshops are two tools to accelerate the plan. Over time, through their Master Family Champion certification program, Victorious Family is positioned to reach millions of families in their own language with contextualized material.</p>
         <p class="reader-text-block__paragraph">Victorious Family has its sights on much more. This April 19th at the World of Coca-Cola –&nbsp;<a href="https://victoriousfamily.org/takethenextstep/">Next Steps – Victorious Family</a> – they are launching a $10.3M fundraising campaign to reach the 1.4M families who desire their training workshops and discipleship coaching. As they look forward to translating their material into eight new languages – Spanish, French, German, Mandarin, Arabic, Urdo, Italian, and Portuguese many more parents can be reached worldwide. “The border has no boundaries as we build a virtual platform to reach millions across the world.” says Terence Chatmon.</p>
         <p class="reader-text-block__paragraph">They built Victorious Family on Christian values and encouraged organizations such as Focus on the Family, FamilyLife, and thousands of Churches to jump on board. Now through their&nbsp;<a href="https://mygiving.secure.force.com/GXDonateNow?id=a0U0H00000ax4U8UAI&amp;fbclid=IwAR0zMxoxof7VSJNknRjw79Wt1-6p_2pJ7NvS3viQVaV9OFkoX_FT1whwWEk">MyGiving with NCF – Donate (force.com)</a>&nbsp;(Giving Fund) they are asking people and foundations to get involved in this transformational work of the family. One family at a time through one family discipleship plan at a time.</p>
         <p class="reader-text-block__paragraph">With your help and financial support families nationwide and beyond can begin to flourish.</p>
         <h3 class="reader-text-block__heading2">Join Us in Atlanta, GA April 19th.</h3>
         <p class="reader-text-block__paragraph">Victorious Family is inviting you to join Terence and Wanda on April 19, 2023. They will host an anniversary gala and vision dinner at the World of Coca-Cola in Atlanta, GA, to celebrate the impact of the past five years but also to share where the Lord is calling Victorious Family to&nbsp;<em>“Take the Next Step!”</em>&nbsp;&nbsp;Together we can shift the tide of family decay in our nation.</p>
         <p class="reader-text-block__paragraph">Prioritize this Distinct Experience. Reserve your seat or table today at&nbsp;<a href="https://www.eventbrite.com/e/take-the-next-step-tickets-504798043537">Take the Next Step Tickets, Wed, Apr 19, 2023 at 6:00 PM | Eventbrite</a></p>
         <p class="reader-text-block__paragraph">P:S Victorious Family HomeKit –&nbsp;<a href="https://victoriousfamily.org/homekit/">Family Home Kit – Victorious Family</a></p>

       </div>
     </div>
   </div>
 </div>
    
  ]


  const  [slug,setSlug]=useState(1);
 
  

  useEffect(() => {
    const path=window.location.pathname
    setSlug(path.slice(10))
   
  }, [])
  





  return (<>

    <div className="PostView">
      <article>
        <div className="blogFeaturedHeaderSection">
          <img className="postFeaturedImage" width="1000" height="750" src={comment_arr[slug-1].immage} alt="" />
          <div className="shadowFromBottom">
            <div className="contentDiv">
              <a href=''><div className='categoryPara'>catogery</div></a>
              <h1>My first blog</h1>

              <div className="authorAndStatsDetail">
                <div className="auther">
                  <img src="/images/footerlogo-light.webp" alt="" />
                 
                </div>
                <div className="publishedDate">
                  <i class="icon fa-regular fa-clock"></i>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='blogMain'>
          <div className='
      col-xl-8 col-lg-8 col-md-12 col-sm-12
       articleDescription' >
            {array[slug-1]}
          </div>

          <div className="
        col-xl-4 col-lg-4 col-md-12 col-sm-12
        sideBar">
            <div className="resentPosts">
              <h2 style={{ marginBottom: '30px' }}>Recent Posts</h2>
              <ul className="allRecentPosts">
                <li><p >Two Ordinary People Called to Reach Millions</p></li>
                <li><p >Take the Next Step</p></li>
                <li><p>Take the Next Step</p></li>
                <li><p>Culture of Isolation Impacting the Family?</p></li>
                <li><p>20-Day Challenge</p></li>
              </ul>


              <h3 style={{ marginBottom: '10px' }}>Please follow and subscribe us</h3>
              <div className="social-icons">
                <a className='links' href=""><i className="fa-brands fa-facebook"></i> </a>
                <a className='links' href=""><i className="fa-brands fa-twitter"></i></a>
                <a className='thirdlinks' href=""><i className="fab fa-instagram"></i> </a>
                <a className='thirdlinks' href=""><i class="fab fa-youtube"></i> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Recent Comments</h4>
          </div>

          <div className="comment-widgets m-b-20">
            {
              comment_arr.map((coment) => {
                return <>
                  <div className="d-flex flex-row comment-row">
                    <div className="p-2">
                      <span className="round">

                        <div style={{

                          fontSize: '34px',
                          width: '52px',
                          borderRadius: '50%',
                          background: '#cfc7c7'

                        }}
                          class="centered">{coment.username.charAt(0)}</div>
                      </span>
                    </div>
                    <div className="comment-text w-100">
                      <h5>{coment.username}</h5>
                      <div className="comment-footer">
                        <span className="date">{coment.date}</span>

                        <span className="action-icons">

                          <a href="#" data-abc="true"><i className="fa fa-heart"></i></a>
                        </span>
                      </div>
                      <p className="m-t-10">{coment.comment}</p>
                    </div>
                  </div>
                </>
              })
            }

          </div>
        </div>
        <div className="comment_box">
          <div className="comment_content">

            <div className="right-side">
              <div className="topic-text">Drop a comment</div>
              {/* <p>Drop a comment...</p> */}
              <form action="#">
                <div className="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-box message-box">
                  <textarea name="comment" id="" placeholder='leave us a message' cols="10" rows="2"></textarea>
                </div>
                <div className="button">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </article>




    </div >



  </>


  )
}

export default slug

