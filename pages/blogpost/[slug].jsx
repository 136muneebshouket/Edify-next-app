import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

const slug = () => {
  // const router = useRouter();
  // const { slug } = router.query






  const blogimg_arr = [
    {
      blogimage: '/images/blogimage1.webp',
      blogheading: 'what computers will be able to do'
    },
    {
      blogimage: '/images/blogimage2.webp',
      blogheading: 'Impact Of Cloud Computing: A Simple Overview.'
    },
    {
      blogimage: '/images/blogimage3.webp',
      blogheading: 'protect yourself from cyber attacks'
    },
    {
      blogimage: '/images/blogimage4.webp',
      blogheading: 'Artificial Intelligence (AI)'
    },
    {
      blogimage: '/images/blogimage5.webp',
      blogheading: 'Beyond Gaming: The destiny of virtual reality world'
    },
    {
      blogimage: '/images/blogimage6.webp',
      blogheading: 'blockchain technology'
    },
    {
      blogimage: '/images/blogimage7.webp',
      blogheading: 'The impact of 5G on computer technology'
    },
    {
      blogimage: '/images/blogimage8.webp',
      blogheading: 'The impact of quantum computing on the future'
    },
    {
      blogimage: '/images/blogimage9.webp',
      blogheading: 'The benefits of using a VPN for computer security'
    },

  ]


  const comment_arr = [
    {

      username: 'SamsoNagaro',
      date: 'April 14, 2019',
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {

      username: 'Jonty Andrews',
      date: 'March 13, 2020',
      comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over'
    },
    {

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



  const blog_array = [
    <div class="entry-content">

      <header aria-label="Newsletter header">
        <h1 class="text-display-large-bold pt6" dir="ltr">By 2030, this is what computers will be able to do</h1>
      </header>
      <div class="relative reader__grid mt6">
        <div>
          <div class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme" dir="ltr">
            <p class="reader-text-block__paragraph">Why should the world care about the future of computing?
              Today, computers are in almost everything we touch, all day long. We still have the image of computers as  rectangular objects either on the desk or nowadays in the pocket; but computers are in our cars, they are in our thermostats, they are in our refrigerators. In fact, more and more computers are no longer objects, but instead contain fabric and almost any other material. That's why we really  need to care about what the future of computing holds because it affects our lives every day.</p>
            <p class="reader-text-block__paragraph">Today, computers are in almost everything we touch, all day long. We still have the image of computers as rectangular objects either on the desk or nowadays in the pocket; but computers are in our cars, they are in our thermostats, they are in our refrigerators. In fact, more and more computers are no longer objects, but instead contain fabric and almost any other material. That's why we really need to care about what the future of computing holds because it affects our lives every day.</p>
            <p class="reader-text-block__paragraph">Some  exciting breakthroughs are related to  the Internet of Things. Just as we tend to think of computers as rectangular boxes, we tend to think of the Internet as a kind of ether floating around us. But very recently, scientists have made major breakthroughs in creating a way for all objects to communicate; so a phone can be connected to a refrigerator, which can be connected to a light bulb. In fact, in the near future, the light bulb will  become the computer itself, which projects information instead of light.</p>
            <h3 class="reader-text-block__heading2">How is computing changing? What forces are  driving these changes?</h3>
            <p class="reader-text-block__paragraph">Some of the ways  computing is changing now is that it is moving into the fabrics of our clothes and  into our  bodies. We are currently developing prosthetics that not only help people reach for something, but also send a message back to the brain when they reach. The first prosthetists were miraculously able  to take a message from the brain and use it to rule the world. But imagine how amazing it will be if this prosthesis also tells the brain that it has caught something. It really changes the way we think about what it means to be human when the movement of a piece of metal at the edge of our hand affects our brain.</p>
            <h3 class="reader-text-block__heading2"><strong>How will advances in computing affect industry, government and society?&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">First, all industries are truly disrupted. Anyone in the infotainment industry who can imagine ads that understand your emotions when you watch them using machine learning. for manufacturing, where robots on the production line can learn in real time based on what they observe. You can imagine a robotic arm in a factory that automatically regenerates when the item being boxed changes shape. Every field is changing, and even the lines between industries are blurring when, for example, 3D printing and machine learning collide; production and information; or production and hull are combined.</p>
            <p class="reader-text-block__paragraph">If you think of the future of computing as the convergence of  biological,  physical and  digital (and  post-digital quantum), using 3D printing, biotechnology, prosthetic robotics, the Internet of Things, autonomous vehicles and other types of artificial intelligence as examples , you can see  how life will change. We must ensure that this development benefits all of society, not just the better-off members of society who may want these prostheses, but all the people who need them.</p>
            <p class="reader-text-block__paragraph">I believe that all technologies must consider a multi-level, multi-part technological model  that takes into account technological, but also  social,  cultural,  legal, all  these aspects of development. All technologists must be trained in both people and technology issues to understand the  uses to which their technology might be put and consider the uses to which they want  to  put it.</p>

            <h3 class="reader-text-block__heading2">What will computing look like in 2030?</h3>
            <p class="reader-text-block__paragraph">In my  work, I am committed to  technology bringing people together instead of tearing them apart. It was feared that having everyone looking at their cell phones all day would alienate us from each other. that we  no longer connect with other people. My own work aims to ensure that the social bonds and  relationships between people, and even the relationships between us and our technology, support the social infrastructure so that we never lose sight of the values ​​that make us human.</p>
            <p class="reader-text-block__paragraph">I think it's not any particular device that I want to see, but rather devices that ensure that interpersonal communication not only continues, but is enhanced, that the understanding between nations and  individuals improves because of the technology that we have. in front of us</p>


          </div>
        </div>
      </div>
    </div>
    ,

    <div class="entry-content">

      <header aria-label="Newsletter header">
        <h1 class="text-display-large-bold pt6" dir="ltr">Impact Of Cloud Computing: A Simple Overview.</h1>
      </header>
      <div class="relative reader__grid mt6">
        <div>
          <div class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme" dir="ltr">
            <p class="reader-text-block__paragraph">"Cloud computing is not only the future of computing, but the present and all of computing's past". -Larry Ellison
              “Cloud services companies of all sizes; the cloud is for everyone. The cloud is democracy." -Marc Benioff
              Cloud computing may seem like a relatively new era in the world of technology. But the truth is that the idea was first developed in the 1950s.
              Cloud computing refers to the provision of computing services "in the cloud", i.e. via the Internet.
              We understand more about the impact of cloud computing on businesses and  people around us.
              Cloud computing has reached its current state through the following technologies:
              distributed systems and their peripherals; </p>
            <ul>
              <li>Virtualization; </li>
              <li> Web 2.0;  </li>
              <li> Service orientation; </li>
              <li> Utility Computing. </li>

            </ul>
            <p class="reader-text-block__paragraph">Today, IT is becoming an enabler of business. Enterprise organizations are moving towards automation, business intelligence and more.
              Cloud computing is one such tool used by many business organizations.
              Cloud Computing offers companies the opportunity to manage their resources online. It allows businesses to access their information virtually, so information can be accessed anytime, anywhere.
              More and more companies are switching to cloud computing. Just like there are two sides of a coin, cloud services have positive effects and at the same time, business units face challenges.
            </p>
            <p class="reader-text-block__paragraph">Cloud computing works by usage. Cloud computing helps reduce business costs because resources are acquired only when they are needed and payment is made based on usage.
              A cloud service can lead to a sharp reduction in labor and maintenance costs, as the company must purchase  or maintain the infrastructure. The computer equipment belongs to the seller and is stored away from the business premises. Consequently, this reduces the demand for internal workers.</p>
            <h3 class="reader-text-block__heading2">Business Scalability</h3>
            <p class="reader-text-block__paragraph">Because of market uncertainty, companies have traditionally struggled with scale. The scalability of cloud services allows businesses to grow efficiently. As their business expands, businesses can increase their infrastructure and facilities without having to anticipate server needs or purchase additional storage capacity.
              You just need to  contact the service provider to change orders. To increase  the efficiency of the operation, the service provider reserves additional space according to your special needs. When a business grows rapidly, it is easy to scale your services using cloud infrastructure. Also, anyone who wants to reduce the criteria can do so without difficulty.</p>
            <h3 class="reader-text-block__heading2"><strong>How the cloud is driving digital transformation&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">Today, many organizations are undergoing digital transformation. This is probably one of the most effective ways businesses can stay competitive in today's crowded market. However, going paperless is only one part of the digital evolution.
              Digital transformation means a comprehensive technological change in business processes. This means that companies are moving their entire operations to the cloud. Many companies are still reluctant to make this change. The main reason for this is that integrating existing data centers into the cloud is an expensive and sometimes complex process. Nobody likes a late migration and nobody wants to risk a bad migration that costs them a lot of money.</p>
            <h3 class="reader-text-block__heading2"><strong>Secure Collaboration&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">Business technology, like all new software, is regularly updated  for security updates, additional features and bug fixes. Because cloud technology leaves the responsibility for updates to the cloud software provider, technical support can be more efficient. Consequently, the need for companies to develop and maintain an entire IT workforce responsible for communications infrastructure, security updates,  software upgrades and call center staffing  are practices that are quickly becoming obsolete with a more agile  IT alternative. service providers.
              Many organizations rely on connectivity, and cloud computing can provide team members with fast, easy, and reliable communication anywhere in the world. Any team member can review, edit or comment on data from the cloud at any time. A virtual employee can participate in a job or project and share ideas with other team members.
            </p>
            <h3 class="reader-text-block__heading2">Easy Access</h3>
            <p class="reader-text-block__paragraph">The cloud service also enables quick access to information, processes and critical business applications from anywhere in the world with a reliable internet connection. Businesses no longer need to carry a tablet or laptop with a wide range of business software and specialized applications. Alternatively, customers can use any browser-compatible device. Experts can contact us as soon as you receive your new computer if there is a malfunction or it has been removed. Since the software is stored in the cloud, you don't have to worry about updating or activating it if it's lost or stolen. Encrypting key data in cloud storage is no exception.
            </p>

            <h3 class="reader-text-block__heading2">Easy data backup and recovery</h3>
            <p class="reader-text-block__paragraph">One of the most important advantages of cloud computing is storage. All relevant business data can be stored in the cloud, enabling connectivity and utility. On the other hand, your data can be accessed from any platform and anywhere in the world, making it great for remote workers and businesses.
              Cloud also includes a built-in  backup and recovery system to ensure that  your company's data is fully protected. Your data is protected against computer hackers, natural disasters and even direct unauthorized access.</p>
            <h3 class="reader-text-block__heading2">Enhanced Customer Service</h3>
            <p class="reader-text-block__paragraph">Employees can now access information that helps them serve consumers anytime, anywhere. They can communicate with potential consumers through the cloud using various devices such as mobile phones, laptops and desktop computers.</p>
            <h3 class="reader-text-block__heading2">Improved Innovation</h3>
            <p class="reader-text-block__paragraph">Using cloud services can help create a workplace that encourages innovation. When the operational and technical elements are in place, companies can direct and focus their attention on driving change initiatives.
            </p>

          </div>
        </div>
      </div>
    </div>
    ,
    <div class="entry-content">

      <header aria-label="Newsletter header">
        <h1 class="text-display-large-bold pt6" dir="ltr">Tips to protect yourself from cyber attacks</h1>
      </header>
      <div class="relative reader__grid mt6">
        <div>
          <div class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme" dir="ltr">
            <p class="reader-text-block__paragraph">Computer security has become a major concern among organizations and individuals, so online cyber security courses are now common and easy to find. Therefore, a quick and effective response is required to mitigate these attacks. The daily introduction of new security-related events has led to an increase  in cyber security attacks. You may lose private information, data and files such as photos, artistic videos and audio tracks. So it is wise to back up your files regularly. However, you can protect yourself from online attacks in the following ways.
            </p>
            <h3 class="reader-text-block__heading2">1. Use online banking wisely</h3>
            <p class="reader-text-block__paragraph">Since the inception of online banking, many threats to financial details have emerged. Some threats you need to be aware of include malware attacks. Malware is software code executed for malicious purposes. Such malicious computer programs usually consist of code developed by cyber attackers. The purpose of the software is to steal account information, including your password, when you log in. This may also include orders from fake websites and account hijacking. With online banking, you can do this securely by following these steps:
            </p>
            <h3 class="reader-text-block__heading2">2. Reduce mobile cyber threats</h3>
            <p class="reader-text-block__paragraph">Choose devices that emphasize safety features. The smartphone must have a file encryption feature. This feature protects devices from malicious applications.
              Protect your smartphone by setting it up. Enable the password feature on your device. Choose a complex password with a combination of characters, symbols and numbers.
              Make sure you have a secure internet connection by setting up online accounts.
              Avoid opening suspicious links and harmful pop-ups.
              Avoid sharing your number on public websites.
              Choose your apps carefully by researching them before installing and ordering.
              If your device is stolen, act now. Report the incident to the organization and  service provider.
            </p>
            <h3 class="reader-text-block__heading2">3. Use online gaming safely</h3>
            <p class="reader-text-block__paragraph">Way to high-speed net, on line games have emerge as available and easily accessible to you. You will find  video games like racing vehicles, Sudoku and many others. However, you need to be very cautious about the risks concerned. Some of those can encompass online predators, adware, malware, and malicious strangers who can trick you into sharing sensitive facts. Practicing internet safety is the handiest way to lessen those risks. Below are a few recreation-orientated protection tips:
              You ought to recognize the dangers of administrative mode. Maximum  video games require your computer to be in administrator mode. This guarantees that the downloaded recreation is safe and authentic.
              Inquisitive about firewall management. Home users can protect their gadgets by allowing the firewall to clear out what they use.
              Play the game on the web page where it's far hosted to keep away from encountering malicious sites and commercials.
            </p>
            <h3 class="reader-text-block__heading2"><strong>Have information of voice over net protocol (VoIP)&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">VoIP entails making calls the use of a broadband connection via the cellphone lines. Some dangers include internet telephony known as junk mail. Many smartphone users have experienced needless calls and voice messages. In the case of spammers, you may use the Akismet plugin to maintain recognised threats far from your website or device.</p>

            <h3 class="reader-text-block__heading2"><strong>Update your computer software regularly&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">There is a need to maintain the entirety up to date in your software program due to the fact your tool can be at chance if the updates from the provider aren't executed more often. You should additionally replace organization’s network and your phrase-press middle.
            </p>
            <h3 class="reader-text-block__heading2">Back up Plugins</h3>
            <p class="reader-text-block__paragraph">No matter how fortified your gadgets can be, hackers may additionally have new approaches of cracking their way through. Consequently you want to be prepared to fast get better if something must appear on your important files and statistics. It's also beneficial to keep your backup break away the principle storage. As an example, a USB flash disk or an external difficult force. Remote backup like cloud garage is available too. You could create multiple facts backups.
            </p>

            <h3 class="reader-text-block__heading2">Use antivirus and antimalware softwares</h3>
            <p class="reader-text-block__paragraph">That is the procedure to equip your computer systems with antivirus software program. Antivirus is software program used to prevent, locate, and get rid of pc viruses. A laptop virus is a application that multiplies itself via converting different pc programs and writing its code. Whilst the code is effectively inserted, the affected files are then “inflamed” with the virus. The most commonplace virus includes Trojan horses, computer worms, and so on. Artists have to ensure to have an antivirus set up on their computers. Their art creations, music advent, video content, and stay performances stored at the computer or laptop can get corrupted. This manner, they will lose access to vital statistics and files.</p>

            <h3 class="reader-text-block__heading2"> Server security</h3>

            <p class="reader-text-block__paragraph">There must be a server-aspect firewall set aside for the option of adding a CDN and SSL. Certificate availability and hosting plans that do not require you to proportion the server environment with other websites are available. You may also authenticate an SSH server with the use of a couple of SSH keys. That is every other choice to conventional logins. The keys have greater bits as compared to a password. These keys are not crackable the use of most current computer systems. The RSA 2048-bit encryption is equal to a password with 617-digit. This key pair includes a non-public key and a public key.</p>

            <h3 class="reader-text-block__heading2">Payment gateway security</h3>

            <p class="reader-text-block__paragraph">It is necessary to make sure that your payment gateway provider and every other third birthday celebration connected for your website is safe. You'll also want to choose encryption standards to use on your fee gateway. If a organisation is handling clients’ non-public charge facts, the information ought to now not fall into unauthorized hands. Any breach obvious can lead to a bad reflection of the corporation’s reputation. For example, a enterprise like EBiz price ordinarily to market it their encryption standards.
            </p>

          </div>
        </div>
      </div>
    </div>
    ,
    <div class="entry-content">

      <header aria-label="Newsletter header">
        <h1 class="text-display-large-bold pt6" dir="ltr">Artificial Intelligence (AI)</h1>
      </header>
      <div class="relative reader__grid mt6">
        <div>
          <div class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme" dir="ltr">
            <p class="reader-text-block__paragraph">Artificial intelligence (AI) is the usage of “computers and machines to mimic the problem-solving and choice-making skills of the human thoughts,” in line with IBM. [1]

              The idea of AI is going lower back at the least 2,700 years. As Adrienne Mayor, research student, folklorist, and technological know-how historian at Stanford college, explained: “Our potential to imagine artificial intelligence is going again to the ancient times. Lengthy earlier than technological advances made self-moving devices feasible, ideas about developing artificial lifestyles and robots had been explored in historical myths.” [2]
            </p>
            <p class="reader-text-block__paragraph">It's far anticipated that the impact of AI can be as globally transformative on economic and social structures as steam engines, railroads, power, electronics, and the net.[1] [2] [3] AI programs within the administrative center of the future enhance vital troubles for occupational safety and fitness. “artificial Intelligence: Implications for the destiny of labor” become currently published inside the American journal of business medicinal drug. The remark opinions the origins of AI, the use of device mastering strategies, and emerging AI packages together with sensor technology, robotic gadgets, or decision support systems.

              Even though nevertheless of their infancy, as AI-enabled applications are delivered in the place of job, occupational protection and health professionals need to increase a better expertise approximately AI strategies and their ability outcomes on work and employees. Maximizing the potential occupational safety and health blessings of AI programs, at the same time as minimizing any capability demanding situations, is essential. The subsequent summarizes AI place of business applications mentioned in the observation.
            </p>

            <h3 class="reader-text-block__heading2">Sensor Devices:</h3>

            <p class="reader-text-block__paragraph">Advanced or “smart” sensors show off greater capability than conventional sensors. Smart sensors can be surgically placed within the frame (implanatables); worn on the body or embedded protection garb (wearables); or attached to a administrative center object to reveal exceptional parameters (placeables).[4] [5] [6] [7] Any tool or item with embedded sensors can be linked to the net, and to different comparable devices, forming an internet of things (IoT). A cloud-based totally IoT platform can gather, combine, and examine facts from a disbursed industrial community of IoT sensors to enhance evaluation of different place of business protection and health dangers.[8]
            </p>
            <h3 class="reader-text-block__heading2">Robotic Devices</h3>
            <p class="reader-text-block__paragraph">Lately, there was a shift from administrative center robot gadgets that do ordinary functions—computerized robots—to the greater superior robots that are able to interact with humans and their surroundings—independent robots. Those more recent AI-enabled robotic gadgets are known as collaborative robots or “cobots”.[13] The presence of a cobot and a human employee in the same paintings area increases a number of protection issues, mostly collision control. In 2016, the global company for Standardization (ISO) furnished safety requirements to promote safe human-cobot collaboration. For industrial cobots prepared with AI-enabled sensors, the ISO encouraged: (1) safety-related monitored preventing controls; (2) human hand guiding of the cobot; (three) speed and separation monitoring controls; and (4) energy and force boundaries.[14]
            </p>
            <h3 class="reader-text-block__heading2">Decision Systems</h3>
            <p class="reader-text-block__paragraph">Any other implication of AI on paintings is automation. Several estimates had been posted about the volume to which activity responsibilities may be automated throughout industry sectors. Research through Oxford college[18] and through the McKinsey worldwide Institute[19] suggest that approximately half of all task duties within the U.S. Economy may be automatic with modern AI-enabled technologies. But, no longer all research agree that AI can be that a good deal of a activity eliminator. Some studies factor to several economic, felony, or societal factors that could restrain a company from adopting process-displacing AI technologies.[20] Fears of technological disruption by means of AI may be exaggerated,[21] as generation adoption is frequently slow[22] which offers time for new venture and process introduction to offset process loss from automation.[23] [24]
            </p>
            <h3 class="reader-text-block__heading2"><strong>Healthcare&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">The impact of AI at the healthcare area could be great; AI has been geared to offer X-ray readings and apps that can remind you to take your pills each day. Additionally, in place of the use of the human thoughts to cause and constitute, AI has been put in location to do all forms of logical reasoning.</p>

            <h3 class="reader-text-block__heading2"><strong>Financial Institutions&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">Technology does not necessarily need to be bodily; it can additionally tend to be abstract. Consequently, this abstraction should play in the monetary zone. Synthetic Intelligence is hired to hit upon fraud, improve consumer representation, popularity and cope with the desires of clients. Ebook-maintaining isn't always performed the usage of human exertions anymore; there are machines in location that calculate the daily transactions in each banking or monetary system.
            </p>
            <h3 class="reader-text-block__heading2">Entertainment</h3>
            <p class="reader-text-block__paragraph">The enjoyment area has widely progressed due to the availability and evolution of exciting era. Video game consoles consisting of the Xbox and playstation  have changed old video video games and similarly reduced the physical activity of people. Is that this an excellent factor or a bad issue? It’s first-rate with the intention to decide. Consequently, people sit down inside the consolation of their home to play soccer and nevertheless manipulate to get the satisfaction of bodily activities. Is that this psychological pleasure really worth the effort? Well, yet some other point to contemplate on in the end.
            </p>

            <h3 class="reader-text-block__heading2">The Effects of Artificial Intelligence</h3>
            <p class="reader-text-block__paragraph">The impact of AI within the evolution of generation will improve each purchaser and manufacturers’ revel in and analytical advertising. As opposed to people acting specific risky jobs, wise machines may be used to duplicate guide efforts. With artificial Intelligence in location, there is near 100% accuracy, efficiency, and mistakes-loose overall performance.

              Synthetic Intelligence has affected the evolution of era in one of a kind sectors, and the world has skilled its magnanimous truth. It has been statistically verified that during years to come, AI will expand significantly and its impact will dramatically emerge within each norm of our society.</p>



          </div>
        </div>
      </div>
    </div>
    ,
    <div class="entry-content">

      <header aria-label="Newsletter header">
        <h1 class="text-display-large-bold pt6" dir="ltr">Beyond Gaming: The destiny of virtual reality world</h1>
      </header>
      <div class="relative reader__grid mt6">
        <div>
          <div class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme" dir="ltr">
            <p class="reader-text-block__paragraph"> the VR and AR market is expected to grow at a CAGR of 63.3 percent between 2018 and 2025. It will reach $571 billion CAGR by 2025.

              From transporting us to distant international locations in an on the spot and giving us a flavor of a vacation, to placing us in movement simulations and situations that we never idea feasible, the possibilities that digital reality era provides are apparently never-ending. The main customers of VR in the meanwhile are those who play video games through high priced headsets and setups, however the uses extend a ways beyond that sphere, and in lots of methods, it’s only a testing ground for what may be accomplished with it.
            </p>
            <p class="reader-text-block__paragraph">Fascinated to listen extra approximately digital truth, how you may get concerned with the era presently, and where it is probably headed inside the future? Check this brief guide, to be able to move into some extra element on what’s on provide presently in the market, and what the future would possibly appear to be for VR.
            </p>

            <h3 class="reader-text-block__heading2">VR – What’s to offer</h3>

            <p class="reader-text-block__paragraph">There is a range of different virtual reality kits out there, ranging in price and fidelity. Here are a few different varieties to help you get started:
            </p>
            <h3 class="reader-text-block__heading2">A basic introduction</h3>
            <p class="reader-text-block__paragraph">In case you want to provide VR a try to get involved and secure with the era, there are plenty of reasonably-priced proof-of-idea headsets obtainable that you can strive while not having to splash the coins on some thing critical. The use of your telephone to download well suited apps, you could use a cradle attachment that places your mobile screen thru lenses or maybe construct one yourself using a cardboard design observed on line.
            </p>
            <h3 class="reader-text-block__heading2">Extreme immersion</h3>
            <p class="reader-text-block__paragraph">As an instance of the alternative, more costly cease of the spectrum, hardcore pc fanatics will advise headsets together with the Valve Index or Oculus Rift S, which reap the most dazzling outcomes, however usually at a hefty value. Moreover, you’ll need to have a laptop base station to run these futuristic headsets, and so there’s even more money concerned in case you’re beginning from scratch. It’s possibly because of this that many bars and arcades are beginning to offer a VR aspect, permitting people to experience completely-fledged VR without splashing out for setup of their very own. For those living in restrained flats, area is, of direction, also an problem.
            </p>
            <h3 class="reader-text-block__heading2"><strong>Wire-free future&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">Regardless of presenting tiers of realism and constancy that a number of the inexpensive VR headsets virtually aren’t capable of reap for the price, some of the pinnacle-quit digital reality headsets are held again (quite literally) by using the quantity of cables they require to arise and strolling. Many trust that with a purpose to attain the freedom of motion needed to be actually immersed, there needs to be a twine-free destiny.

              The Oculus Quest VR headset is a good example of this concept being positioned into practice, and it’s proving pretty the famous alternative. This headset makes use of in-constructed hardware to run games, no longer requiring you to be installed to a base station pc to attract the energy. There are, of route, a few limitations to this option, but it would just be the manner forward.</p>

            <h3 class="reader-text-block__heading2"><strong>Financial Institutions&nbsp;</strong></h3>
            <p class="reader-text-block__paragraph">Technology does not necessarily need to be bodily; it can additionally tend to be abstract. Consequently, this abstraction should play in the monetary zone. Synthetic Intelligence is hired to hit upon fraud, improve consumer representation, popularity and cope with the desires of clients. Ebook-maintaining isn't always performed the usage of human exertions anymore; there are machines in location that calculate the daily transactions in each banking or monetary system.
            </p>
            <h3 class="reader-text-block__heading2">What tomorrow looks like?</h3>
            <p class="reader-text-block__paragraph">3D/virtual reality is being particularly experimented within the gaming and leisure-based markets, from video games including the revolutionary half of-existence: Alyx from Valve, to immersive subject parks, ride stories like Disney international’s Avatar: Flight of Passage, which sees the combination of augmented imagery with different sensory simulations and tech. But, it’s already beginning to be adopted into distinct markets, too.
            </p>

            <h3 class="reader-text-block__heading2">Simulation</h3>
            <p class="reader-text-block__paragraph">For environments that can’t be organized for in every other way, which include area exploration, as an instance, unique measures are being put in place that makes use of VR along other equipment. One exciting use is within NASA, who've spent thousands and thousands developing a in a position schooling facility that mixes VR with anti-gravity to present trainee astronauts an idea of what it is going to be like out there in area once they eventually move into orbit. Exciting stuff!</p>



          </div>
        </div>
      </div>
    </div>
    ,
    <div class="entry-content">

      <header aria-label="Newsletter header">
        <h1 class="text-display-large-bold pt6" dir="ltr">Blockchain overview</h1>
      </header>
      <div class="relative reader__grid mt6">
        <div>
          <div class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme" dir="ltr">
            <p class="reader-text-block__paragraph"> Blockchain defined: Blockchain is a shared, immutable ledger that enables the method of recording transactions and tracking belongings in a enterprise network. An asset may be tangible (a house, car, coins, land) or intangible (intellectual property, patents, copyrights, branding). Really some thing of cost can be tracked and traded on a blockchain network, reducing threat and cutting prices for all involved.
            </p>
            <h3 class="reader-text-block__heading2">Why blockchain is important</h3>
            <p class="reader-text-block__paragraph">Business runs on information. The faster it’s acquired and the more accurate it's miles, the higher. Blockchain is ideal for delivering that information as it provides immediate, shared and absolutely obvious facts stored on an immutable ledger that can be accessed best with the aid of permissioned community members. A blockchain network can music orders, bills, bills, manufacturing and lots extra. And because contributors share a single view of the reality, you may see all info of a transaction cease to cease, giving you greater self belief, in addition to new efficiencies and possibilities.
            </p>

            <h3 class="reader-text-block__heading2">Key elements of a blockchain</h3>

            <p class="reader-text-block__paragraph">Allotted ledger technology
              All network contributors have get entry to to the allotted ledger and its immutable document of transactions. With this shared ledger, transactions are recorded most effective as soon as, doing away with the duplication of effort that’s common of traditional commercial enterprise networks.
            </p>
            <p class="reader-text-block__paragraph">Immutable facts
              No participant can trade or tamper with a transaction after it’s been recorded to the shared ledger. If a transaction file includes an errors, a new transaction must be introduced to reverse the error, and both transactions are then visible.
            </p>
            <p class="reader-text-block__paragraph">Smart contracts
              to speed transactions, a fixed of guidelines — called a smart settlement — is stored at the blockchain and carried out robotically. A smart contract can outline conditions for corporate bond transfers, consist of phrases for journey coverage to be paid and lots more.
            </p>
            <h3 class="reader-text-block__heading2">How blockchain works</h3>
            <p class="reader-text-block__paragraph">As every transaction happens, it's miles recorded as a “block” of records
              those transactions show the motion of an asset that may be tangible (a product) or intangible (highbrow). The data block can report the information of your preference: who, what, when, in which, how a lot or even the situation — together with the temperature of a meals shipment.
            </p>
            <p class="reader-text-block__paragraph">Each block is attached to the ones earlier than and after it
              those blocks shape a sequence of records as an asset moves from vicinity to area or possession modifications arms. The blocks confirm the precise time and sequence of transactions, and the blocks hyperlink securely collectively to prevent any block from being altered or a block being inserted among  existing blocks.
            </p>
            <p class="reader-text-block__paragraph">Transactions are blocked together in an irreversible chain: a blockchain
              every extra block strengthens the verification of the previous block and therefore the complete blockchain. This renders the blockchain tamper-evident, delivering the important thing strength of immutability. This eliminates the possibility of tampering by way of a malicious actor — and builds a ledger of transactions you and different community members can trust.
            </p>
            <h3 class="reader-text-block__heading2">Benefits of blockchain</h3>
            <p class="reader-text-block__paragraph">What desires to trade: Operations often waste effort on reproduction report preserving and 1/3-party validations. Report-maintaining systems can be susceptible to fraud and cyberattacks. Limited transparency can gradual data verification. And with the appearance of IoT, transaction volumes have exploded. All of this slows business, drains the bottom line — and manner we need a higher manner. Input blockchain.
            </p>

            <p class="reader-text-block__paragraph">Extra accept as true with
              With blockchain, as a member of a participants-simplest network, you can relaxation assured which you are receiving correct and well timed statistics, and that your private blockchain facts can be shared most effective with community participants to whom you have got especially granted get right of entry to.</p>


            <p class="reader-text-block__paragraph">Greater security
              Consensus on data accuracy is required from all network members, and all validated transactions are immutable because they are recorded permanently. No one, not even a system administrator, can delete a transaction.
            </p>

            <p class="reader-text-block__paragraph">More efficiencies
              With a distributed ledger that is shared among members of a network, time-wasting record reconciliations are eliminated. And to speed transactions, a set of rules — called a smart contract — can be stored on the blockchain and executed automatically.
            </p>

            <h3 class="reader-text-block__heading2">Blockchain security</h3>
            <p class="reader-text-block__paragraph">Risk management systems for blockchain networks
              When building an enterprise blockchain application, it’s important to have a comprehensive security strategy that uses cybersecurity frameworks, assurance services and best practices to reduce risks against attacks and fraud.</p>



          </div>
        </div>
      </div>
    </div>
    ,
    <div class="entry-content">
  <header aria-label="Newsletter header">
    <h1 class="text-display-large-bold pt6" dir="ltr">
      The impact of 5G on computer technology
    </h1>
  </header>
  <div class="relative reader__grid mt6">
    <div>
      <div
        class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme"
        dir="ltr"
      >
        <p class="reader-text-block__paragraph">
          5G is the 5th technology (that’s what the “G” stands for) of wi-fi
          technology. Widely, the primary generation of mobile technology, 1G,
          changed into about voice—the capacity to use a phone in a vehicle, or
          away from home. 2G introduced a short-messaging layer. 3G furnished
          the center network speeds had to release the primary smartphones. And
          4G LTE, with its excessive information-switch charges, gave us access
          to mobile video with low buffering and gave rise to many of the linked
          gadgets and location services that we depend on and revel in these
          days. Verizon 5G ultra Wideband offers hastens to 10 times quicker
          than median Verizon 4G LTE speeds—and that opens the door to a whole
          new world of recreation-converting possibilities.
        </p>

        <h3 class="reader-text-block__heading2">How fast can 5G be? Very.</h3>
        <p class="reader-text-block__paragraph">
          5G down load speeds are a sizeable development over previous
          generations. As an instance, Verizon 5G ultra Wideband (to be had with
          pick plans) is up to 10 times faster than Verizon 4G LTE. With Verizon
          5G ultra Wideband: you may down load a movie in minutes and a tune in
          seconds. You could get audio and video in HD. You may enjoy
          console-excellent gaming at the cross. You may circulation,
          proportion, publish and work in public settings without being bogged
          down via all of us round you while connected. With Verizon, you also
          have the us’s most dependable 5G community—an award we’ve received 3
          instances in a row. We’re the 5G community the united states relies
          on. See our contemporary 5G telephones and different 5G offers, or get
          greater 5G solutions below.
        </p>
        <h3 class="reader-text-block__heading2">
          <strong>What are the benefits of 5G? &nbsp;</strong>
        </h3>
        <p class="reader-text-block__paragraph">
          5G can provide excessive speeds, low latency and massive potential,
          providing the capacity to trade what you experience with your cell
          tool, and much greater. 5G ought to assist revolutionize industries
          and can provide immediately impact for clients. 5G could help make
          organizations more efficient and deliver consumers access to more
          facts faster than ever earlier than. It can help allow connected
          motors and lead to new fan studies at stadiums. It can allow for new
          student experiences to invigorate schooling and support artificial
          intelligence (AI) in public safety. And it could allow superior gaming
          and esports experiences.
        </p>
      </div>
    </div>
  </div>
    </div>
    ,
    <div class="entry-content">
  <header aria-label="Newsletter header">
    <h1 class="text-display-large-bold pt6" dir="ltr">
      The impact of quantum computing on the future
    </h1>
  </header>
  <div class="relative reader__grid mt6">
    <div>
      <div
        class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme"
        dir="ltr"
      >
        <p class="reader-text-block__paragraph">
          Quantum computing, an emerging era that uses the legal guidelines of
          quantum mechanics to supply exponentially better overall performance
          for positive forms of calculations, gives the opportunity of foremost
          breakthroughs throughout sectors. Investors additionally see those
          opportunities: funding of begin-u.S.A.Centered on quantum technologies
          more than doubled to $1.Four billion in 2021 from 2020. Quantum
          computing now has the ability to seize almost $700 billion in value as
          early as 2035, with that marketplace anticipated to exceed $ninety
          billion annually through 2040. That said, quantum computing’s greater
          powerful computer systems may also someday pose a cybersecurity
          chance.
        </p>
        <p class="reader-text-block__paragraph">
          Quantum technology have the potential to solve some of the most
          intractable worldwide demanding situations, from limiting
          international warming to delivering sport-converting reductions in
          drug discovery instances. Our modern day Quantum era screen reveals
          public and personal funding maintains to soar, with the intention of
          permitting the generation to recognize its promise. Four
          industries—pharmaceuticals, chemical substances, automobile, and
          finance—continue to be on target to turn out to be the first
          beneficiaries of quantum advantages, with the capability to capture
          nearly $seven-hundred billion in cost as early as 2035
        </p>

        <h3 class="reader-text-block__heading2">
          Quantum Computing & Its Industry Applications
        </h3>
        <p class="reader-text-block__paragraph">
          Over the past decade, there have been enormous upgrades in gadget
          mastering, a subset of AI. One example is the speed, accuracy and
          efficiency of net searches on engines like google, including Google.
          The idea of device getting to know includes schooling computer systems
          to perform human responsibilities, allowing the machines to ask
          questions, gather statistics, and expand conclusions for set of rules
          formulation. Nowadays, system mastering improvement is utilized in
          applications including self-using cars, net search consequences, and
          credit score scoring, amongst many others.
        </p>
        <p class="reader-text-block__paragraph">
          Any other enterprise that can gain from quantum computing generation
          is the healthcare enterprise, specifically the drug improvement
          region. Drug checking out is an extended and drawn-out system, from
          research and improvement, to trials, trying out, and approvals. But,
          this will trade with quantum computing because the generation will
          permit the computer to have a look at all feasible molecules and drug
          combinations and give you the right solution.
        </p>
        <h3 class="reader-text-block__heading2">
          <strong>Quantum Computing vs. Classical Computing </strong>
        </h3>
        <p class="reader-text-block__paragraph">
          Quantum computing is a new and emerging subject inside the
          international of generation. It extends classical computing however
          with a distinctive approach to fixing problems. Its concept dates
          returned to the 1980s, but it's miles most effective in current years
          that we have found out its fantastic ability if handiest it may be
          further evolved and implemented in our each day lives.
        </p>
        <p class="reader-text-block__paragraph">
          Quantum computing is a shape of computing that has the capability to
          remedy troubles that current computer systems cannot. Quantum
          computing makes use of Qubits rather than Bits, which can be in more
          than one states simultaneously. This so-referred to as superposition
          country approach the qubit exists simultaneously in both 1 and 0
          states, which isn't like a traditional computer that uses transistors,
          that could only be 1 or zero. The primary advantage of quantum
          computing is the potential to paintings with facts in distinct
          dimensions right away. This option lets in quantum computer systems to
          carry out many calculations concurrently and increase their processing
          electricity exponentially, fixing complicated problems that are
          impossible on classical computers. As greater qubits are linked, a
          quantum laptop's electricity will increase substantially.
        </p>
      </div>
    </div>
  </div>
   </div>
   ,
   <div class="entry-content">
  <header aria-label="Newsletter header">
    <h1 class="text-display-large-bold pt6" dir="ltr">
      The benefits of using a VPN for computer security
    </h1>
  </header>
  <div class="relative reader__grid mt6">
    <div>
      <div
        class="reader-article-content reader-article-content--content-blocks reader-article-content--x-theme"
        dir="ltr"
      >
        <p class="reader-text-block__paragraph">
          At a primary level, in case you set off a VPN (or digital private
          community) when you go online, it could offer two key blessings.
          Privacy — by protecting such things as your IP deal with, area, and
          search history, to preserve them from being tracked by websites,
          internet browsers, cable corporations, internet service carriers
          (ISPs), and others. Safety — through assisting protect your non-public
          data and other records because it’s in transit, or being sent from and
          obtained by using your tool. But that’s now not all a VPN can do. A
          VPN also can help you in other methods.
        </p>

        <h3 class="reader-text-block__heading2">
          Hides your private information
        </h3>
        <p class="reader-text-block__paragraph">
          Web sites and apps can constantly music your on-line pastime, studying
          the facts they acquire. A VPN can save you web browsers and others
          from accessing your connection, assisting to hold statistics you ship
          and acquire anonymous and comfortable. Some VPNs additionally offer
          army-grade 256-bit encryption of your data.
        </p>

        <h3 class="reader-text-block__heading2">
          <strong>Escape data-throttling&nbsp;</strong>
        </h3>
        <p class="reader-text-block__paragraph">
          Facts throttling happens while you’ve used a sure quantity of your
          statistics and, as a result, your internet service provider slows down
          your service. With a VPN, not best will your statistics be free from
          the prying eyes of ISPs and others, but you also won’t be concern to a
          data cap. ISPs can location caps on statistics to maximize internet
          speed for a number of their clients.
        </p>
        <h3 class="reader-text-block__heading2">
          <strong>Avoid bandwidth-throttling&nbsp;</strong>
        </h3>
        <p class="reader-text-block__paragraph">
          If you’ve experienced slower internet speed on certain web sites and
          at special times, you may have experienced bandwidth throttling. ISPs
          — or anybody with administrative controls over your network — is
          probably chargeable for the slowdown. A VPN can assist. It could
          thwart the sluggishness via encrypting your tool’s net visitors. This
          prevents all people at the identical community from seeing the content
          of your web site visitors and disguises its vacation spot.
        </p>
        <h3 class="reader-text-block__heading2">
          <strong>Access region-blocked services like Netflix&nbsp;</strong>
        </h3>
        <p class="reader-text-block__paragraph">
          A few VPNs may be capable of get entry to geo-blocked content
          inclusive of Netflix and other carriers*. How? A VPN can trade your IP
          address to make a content material provider assume you’re browsing in
          every other place or place that allows get admission to. Note: usually
          check the phrases of carrier agreements to find out what’s permitted
          with the aid of your streaming carrier and follow the ones tips.
          Additionally, bear in mind that some countries may additionally have
          penalties for the use of VPN to avoid its regulations.
        </p>
        <h3 class="reader-text-block__heading2">
          <strong>Avoid censorship when traveling abroad&nbsp;</strong>
        </h3>
        <p class="reader-text-block__paragraph">
          A few VPNs allow you to skip geographical regulations. As an instance,
          some countries restrict or forbid access to sure web sites inclusive
          of social media systems or censor certain content. A VPN, however, may
          also help grant you access by making your visitors look like it’s
          coming from a special place. Take into account that it is the
          consumer’s duty to become aware of whether their use of a VPN is
          criminal or now not, and to test the country’s legal guidelines
          earlier than the use of a VPN.
        </p>
        <h3 class="reader-text-block__heading2">
          <strong>Offer cheaper long-distance telephone charges&nbsp;</strong>
        </h3>
        <p class="reader-text-block__paragraph">
          A VPN may be able to reduce long-distance phone costs. For example,
          instead of connecting via far flung get admission to servers and
          dial-up networks to get entry to a company's intranet, you may connect
          with your nearby ISP get admission to factor.
        </p>
      </div>
    </div>
  </div>
</div>

  ]


  const [slug, setSlug] = useState(1);



  useEffect(() => {
    const path = window.location.pathname
    setSlug(path.slice(10))

  }, [])






  return (<>

    <div className="PostView">
      <article>
        <div className="blogFeaturedHeaderSection">
          <img className="postFeaturedImage" width="1000" height="750" src={blogimg_arr[slug - 1].blogimage} alt="" />
          <div className="shadowFromBottom">
            <div className="contentDiv">
              <a href=''><div className='categoryPara'>catogery</div></a>
              <h1>{blogimg_arr[slug - 1].blogheading}</h1>

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
            {blog_array[slug - 1]}
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

