<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Oğuzhan
        <span class="text-primary">Kahyaoğlu</span>
      </h1>
      <div class="subheading mb-5">
        9+ yrs. Software Arhcitect, Full-stack Developer; United Kingdom (UK)
        <a href="mailto:oguzhan.kahyaoglu@yahoo.com">oguzhan.kahyaoglu@yahoo.com</a><br>
        <a href="/cv/Oguzhan-Kahyaoglu-2023-2.pdf" target="_blank">Download CV PDF</a><br>
        <a href="/cv/Oguzhan-Kahyaoglu-2023.docx" target="_blank">Download CV Word</a>
      </div>
      <p class="lead mb-5">
        Tech Influencer! Loves to spread dev-related info;<br>
        <ul>
          <li>expert at <strong>Test Driven Development (TDD) using .NET Framework/.NET Core (9+ yrs), </strong></li>
          <li><strong>Angular (4+ yrs), Javascript/Typescript (9+ yrs)</strong> and many other front-end technologies,</li>
          <li>written many <strong>Nuget Packages</strong> (downloaded more than 50K+),</li>
          <li>deeply love <strong>Jetbrains</strong> products,</li>
          <li>connected to KISS, DRY and YAGNI principles, </li>
          <li>tightly connected to Agile principles,</li>
          <li>worked with Trunk-based development and using Feature-toggling as needed,</li>
        </ul>
        In Amazon, Alexa Shopping Multi Modal Experiences Team (current employer), we develop high quality products, following the latest world-wide software
        development standards; <strong>unit/integration test, internal-developed quality gates, ui test etc.</strong><br>
      </p>
      <p class="lead mb-5"><strong>.NetCore, Java/Kotlin, Angular, Javascript/Typescript, Heroku, Azure (Functions, Service Bus, Storage, Application Insights, App Services), Unit Test (xUnit) </strong> <strong>Resharper/Rider</strong>
        Microservice, LLBLGEN, Entity Framework Core, <strong>MassTransit,</strong>
        Javascript, LESS, <strong>AspnetZero, AspnetBoilerplate, Mediatr&amp;CQRS</strong>,
        <strong>Regex, Hangfire,</strong> Jenkins, svn/git, <strong> Teamcity, Octopus, TestProject/Selenium</strong>,
        OOP, Object Oriented Design, <strong>Entity Framework, Unit Testing,</strong>
        Contentful, HeadlessCMS, <strong>and more!</strong>
      </p>

      <ul class="fa-ul mb-0">
        <li>
          <a href="https://www.linkedin.com/in/oguzhan-kahyaoglu/detail/recent-activity/posts/" target="_blank"
             rel="noopener noreferrer"
             aria-label="LinkedIn Profile">
            <font-awesome class="fa-li" :icon="['fab', 'linkedin']"/>
            LinkedIn Profile
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/1988124/o%C4%9Fuzhan-kahyao%C4%9Flu/" target="_blank"
             rel="noopener noreferrer"
             aria-label="StackOverflow Profile">
            <font-awesome class="fa-li" :icon="['fab', 'stack-overflow']"/>
            StackOverflow Profile
          </a>
        </li>
        <li>
          <a href="https://github.com/oguzhankahyaoglu" target="_blank" rel="noopener noreferrer"
             aria-label="GitHub Profile">
            <font-awesome class="fa-li" :icon="['fab', 'github']"/> Github Profile
          </a>
        </li>
        <li>
          <a href="https://www.nuget.org/profiles/oguzhan.kahyaoglu/" target="_blank" rel="noopener noreferrer"
             aria-label="Nuget Profile">
            <font-awesome class="fa-li" :icon="['fab', 'bitbucket']"/>Nuget Profile
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
