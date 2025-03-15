<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Oguzhan
        <span class="text-primary">Kahyaoglu</span>
      </h1>
      <div class="subheading mb-4">
        Senior Software Engineer | Full-Stack Developer | United Kingdom (UK)
        <br>
        <a href="mailto:oguzhan.kahyaoglu@yahoo.com">oguzhan.kahyaoglu@yahoo.com</a>
      </div>

      <div class="mb-4">
        <a class="btn btn-primary mr-2" href="/cv/oguzhan-kahyaoglu-2025-1.pdf" target="_blank">Download CV (PDF)</a>
        <a class="btn btn-secondary" href="/cv/oguzhan-kahyaoglu-2025.docx" target="_blank">Download CV (Word)</a>
      </div>

      <p class="lead mb-4">
        Passionate about <b>high-performance software development</b>,
        I specialize in <b>scalable architectures, cloud solutions, and full-stack development</b>.
        With <b>12+ years of experience</b>,
        I have successfully delivered <b>enterprise-grade applications</b>
        for industries including <b>public safety, law enforcement, and e-commerce</b>.
      </p>

      <h3 class="mb-3">Expertise & Contributions</h3>
      <ul>
        <li><strong>Test-Driven Development (TDD) & Scalable .NET Architectures:</strong> 12+ years of experience in .NET Core/.NET Framework.</li>
        <li><strong>Frontend Mastery:</strong> 2+ years of React, 4+ years of Angular, 12+ years with JavaScript/TypeScript, and expertise in modern UI frameworks.</li>
        <li><strong>Open Source & NuGet Contributor:</strong> Developed multiple high-impact <b>NuGet packages</b> (100K+ downloads).</li>
        <li><strong>Cloud & Distributed Systems:</strong> Extensive experience in <b>Azure, microservices, Kubernetes, and event-driven architectures</b>.</li>
        <li><strong>Agile & Scalable Development:</strong> Strong advocate of <b>KISS, DRY, and YAGNI</b> principles, feature toggling, and trunk-based development.</li>
      </ul>

      <h3 class="mb-3">Professional Experience</h3>
      <p>
        As a <b>Senior Software Engineer at Axon</b>, I work on mission-critical <b>public safety solutions</b> used globally by law enforcement agencies.
        My key contributions include:
      </p>
      <ul>
        <li><strong>Optimized large-scale device log ingestion (Taser 7 & Taser 10), reducing processing times from minutes to seconds.</strong></li>
        <li><strong>Enhanced system scalability:</strong> Increased concurrent request handling with <b>.NET performance tuning</b>.</li>
        <li><strong>Improved API response time:</strong> Leveraged <b>HttpClientFactory</b>, reducing API latencies and boosting throughput 5x.</li>
        <li><strong>Worked on Axon's Commander platform:</strong> On-premise solutions for regions with <b>strict data regulations</b>, modernized legacy architectures.</li>
      </ul>

      <h3 class="mb-3">Technical Stack</h3>
      <p class="lead">
        <strong>.NET Core, Java/Kotlin, Angular, JavaScript/TypeScript, Azure (Functions, Service Bus, Storage, App Services), Resharper/Rider, MassTransit, Mediatr, CQRS, Entity Framework, xUnit, Hangfire, Jenkins, TeamCity, Octopus, Selenium</strong>, and more.
      </p>

      <h3 class="mb-3">Connect with Me</h3>
      <ul class="fa-ul mb-0">
        <li>
          <a href="https://www.linkedin.com/in/oguzhan-kahyaoglu/detail/recent-activity/posts/" target="_blank">
            <font-awesome class="fa-li" :icon="['fab', 'linkedin']"/> LinkedIn Profile
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/1988124/o%C4%9Fuzhan-kahyao%C4%9Flu/" target="_blank">
            <font-awesome class="fa-li" :icon="['fab', 'stack-overflow']"/> StackOverflow Profile
          </a>
        </li>
        <li>
          <a href="https://github.com/oguzhankahyaoglu" target="_blank">
            <font-awesome class="fa-li" :icon="['fab', 'github']"/> GitHub Profile
          </a>
        </li>
        <li>
          <a href="https://www.nuget.org/profiles/oguzhan.kahyaoglu/" target="_blank">
            <font-awesome class="fa-li" :icon="['fab', 'bitbucket']"/> NuGet Profile
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

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
