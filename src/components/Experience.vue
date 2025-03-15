<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div class="w-100">
      <h2 class="mb-5">Experience</h2>

      <!-- Axon -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Software Engineer II</h3>
          <div class="subheading mb-3">Axon Public Safety</div>
          <p>
            At Axon, I develop <b>mission-critical public safety solutions</b> used by law enforcement agencies worldwide.
            I focus on <b>high-performance .NET architectures</b>, <b>cloud-based scalable solutions</b>,
            and <b>device log ingestion pipelines</b>.
          </p>
          <ul>
            <li><b>Optimized Taser 10 & Taser 7 device log ingestion:</b> Increased throughput from <b>8 to 400 Virtual Users (VU)</b> in K6 load tests.</li>
            <li><b>Reduced database query times:</b> Improved API response from <b>2 minutes to 3 seconds</b> by eliminating unnecessary tracking overhead.</li>
            <li><b>Enhanced large-scale processing:</b> Optimized <b>memory allocation & garbage collection</b>, reducing timeout failures under heavy load.</li>
            <li><b>Modernized legacy systems:</b> Migrated <b>on-premise applications to scalable .NET Core solutions</b>.</li>
          </ul>
          <p><b>Tech Stack:</b> .NET Core, C#, Azure (Functions, Service Bus, Storage, App Services), Entity Framework, xUnit, MassTransit, Mediatr & CQRS, Hangfire, TeamCity, Octopus, React, SQL Server</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">June 2023 - Present</span>
        </div>
      </div>

      <!-- Amazon -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Senior Software Developer (SDE 2)</h3>
          <div class="subheading mb-3">Amazon</div>
          <p>
            As part of the <b>Alexa Shopping Multimodal Experiences team</b>, I developed <b>rich voice-first shopping experiences</b> using <b>AWS, Java/Kotlin, and Alexa Presentation Language (APL)</b>.
          </p>
          <ul>
            <li><b>Developed scalable backend services</b> for Alexa Shopping, improving <b>query performance and reducing latency</b>.</li>
            <li><b>Implemented multimodal UI experiences</b> using <b>APL</b>, enabling seamless voice and screen-based interactions.</li>
            <li><b>Enhanced cloud infrastructure:</b> Optimized <b>AWS Lambda functions & DynamoDB queries</b> for faster response times.</li>
          </ul>
          <p><b>Tech Stack:</b> AWS, Java/Kotlin, Alexa Presentation Language (APL), DynamoDB, Lambda, many other internal tools</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">October 2022 - May 2023</span>
        </div>
      </div>

      <!-- Enerjisa Üretim -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Software Architect</h3>
          <div class="subheading mb-3">Enerjisa Üretim</div>
          <p>
            Led <b>enterprise software projects</b> powering <b>power plants across Turkey</b>. Focused on <b>high-performance .NET & Angular applications</b> in a fully Agile environment.
          </p>
          <ul>
            <li><b>Developed scalable enterprise platforms:</b> Built applications using <b>.NET Core & Angular</b>, ensuring <b>high availability & performance</b>.</li>
            <li><b>Implemented automated testing pipelines:</b> Ensured <b>robust unit & UI testing</b> to maintain software quality.</li>
            <li><b>Optimized microservices & API architecture:</b> Integrated <b>AspNetZero & AspNetBoilerplate frameworks</b> for modular development.</li>
          </ul>
          <p><b>Tech Stack:</b> .NET Core, AspNetBoilerplate, AspNetZero, Angular, TypeScript, SQL Server</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">Jan 2019 - September 2022</span>
        </div>
      </div>

      <!-- Vektora -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Lead Developer</h3>
          <div class="subheading mb-3">Vektora</div>
          <p>
            As a <b>Lead Engineer</b>, I spearheaded <b>large-scale system integrations and internal frameworks</b>.
          </p>
          <ul>
            <li><b>Built & maintained enterprise integrations</b> for <b>Vestel, Regal, Garenta</b>, handling high-traffic workloads.</li>
            <li><b>Developed internal frameworks</b> used across multiple projects, improving development efficiency.</li>
            <li><b>Led a team of developers:</b> Conducted <b>code reviews, mentorship, and best practice implementations</b>.</li>
          </ul>
          <p><b>Tech Stack:</b> .NET Core, MVC, Entity Framework, SQL Server, Heroku, Git/SVN, JavaScript</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">Dec 2016 - Jan 2019</span>
        </div>
      </div>

      <!-- Hostamedia -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Senior Full-Stack Developer</h3>
          <div class="subheading mb-3">Hostamedia Web Agency</div>
          <p>
            Started as a <b>Junior Developer</b> and quickly grew into a <b>Senior Full-Stack Developer</b> role.
            Developed <b>high-performance CMS integrations</b> for <b>leading hotel brands</b>.
          </p>
          <ul>
            <li><b>Developed custom CMS plugins</b> for <b>The Marmara Hotels, The House Hotels, and Avantgarde Group</b>.</li>
            <li><b>Implemented back-end integrations</b> for <b>hotel booking & reservation platforms</b>.</li>
            <li><b>Optimized legacy systems:</b> Upgraded existing applications, improving performance and security.</li>
          </ul>
          <p><b>Tech Stack:</b> .NET 3.5, WebForms, LLBLGen, SQL Server, jQuery, SVN</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">Oct 2012 - Nov 2016</span>
        </div>
      </div>

    </div>
  </section>
</template>
