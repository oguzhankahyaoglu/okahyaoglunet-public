<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Oğuzhan
        <span class="text-primary">Kahyaoğlu</span>
      </h1>
      <div class="subheading mb-5">
        8+ yrs. Software Arhcitect, Full-stack Developer; ISTANBUL/TURKEY
        <a href="mailto:oguzhan.kahyaoglu@yahoo.com">oguzhan.kahyaoglu@yahoo.com</a><br>
        <a href="/cv/Oguzhan-Kahyaoglu-2021-en.pdf" target="_blank">Download CV PDF</a>
      </div>
      <p class="lead mb-5">
        Tech Influencer! Loves to spread dev-related info;<br>
        I deeply love Jetbrains products. At the same time, I am deeply connected to KISS, DRY and YAGNI principles.<br><br>
        Within Enerjisa (current employer), we develop high quality products, following the latest world-wide software
        development standards; <strong>unit test, sonarqube quality gates, ui test etc.</strong><br><br>
        Tightly connected to Agile principles. For the last 2 years, I have been working with Trunk-based development
        and using Feature-toggling as needed.

      </p>
      <p class="lead mb-5"><strong>.NetCore, Heroku, Azure, Unit Test (xUnit) </strong> <strong>Resharper/Rider</strong>
        Microservice, LLBLGEN, Entity Framework Core,
        Javascript, LESS, <strong>AspnetZero, AspnetBoilerplate, Mediatr&amp;CQRS</strong>,
        <strong>Regex, Hangfire,</strong> Jenkins, svn/git, <strong> Teamcity, Octopus, TestProject/Selenium</strong>,
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
          <a href="https://bitbucket.org/okahyaoglu/" target="_blank" rel="noopener noreferrer"
             aria-label="Bitbucket Profile">
            <font-awesome class="fa-li" :icon="['fab', 'bitbucket']"/>Bitbucket Profile
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
