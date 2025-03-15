<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="portfolio">
    <div class="w-100">
      <h2 class="mb-5">Portfolio</h2>

      <!-- Taser 10 Integration (Axon) -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Taser 10 Integration
            <a href="https://www.axon.com/products/taser-10/" target="_blank" rel="noopener noreferrer">link</a>
          </h3>
          <div class="subheading mb-3">Axon Public Safety</div>
          <p>
            Developed a <b>high-performance device log ingestion pipeline</b> for Axon's latest-generation <b>Taser 10</b>,
            enabling law enforcement agencies to process and analyze critical usage data in real-time.
          </p>
          <ul>
            <li><b>Reverse-engineered undocumented device logs</b> to build a structured parsing mechanism.</li>
            <li><b>Optimized binary log ingestion</b> for faster processing and reduced storage overhead.</li>
            <li><b>Enhanced API scalability:</b> Increased throughput from <b>8 to 400+ Virtual Users (VU)</b> using .NET optimizations.</li>
            <li><b>Ensured regulatory compliance:</b> Processed taser usage logs to help agencies track and monitor real-world deployments.</li>
          </ul>
          <p><b>Tech Stack:</b> .NET Core, C#, Azure (Functions, Service Bus, Storage), Entity Framework, xUnit, MassTransit, Mediatr, Hangfire, SQL Server</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">2023 - Present</span>
        </div>
      </div>

      <!-- PPM (Enerjisa Üretim) -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">PPM (Power Plant Management)</h3>
          <div class="subheading mb-3">Enerjisa Üretim</div>
          <p>
            Developed a <b>scalable enterprise application</b> for power plant management, used across multiple facilities
            in Turkey. Implemented <b>real-time monitoring, reporting, and automation</b> features.
          </p>
          <ul>
            <li><b>Built microservices-based architecture</b> for improved maintainability and scalability.</li>
            <li><b>Integrated automated testing pipelines</b> to ensure software reliability.</li>
            <li><b>Leveraged Angular & .NET Core</b> for a modern, responsive UI.</li>
          </ul>
          <p><b>Tech Stack:</b> AspNetBoilerplate, AspNetZero, Angular, TypeScript</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">2020 - 2022</span>
        </div>
      </div>

      <!-- Kale Community Portal -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Kale Community Portal</h3>
          <div class="subheading mb-3">Vektora</div>
          <p>
            A <b>Facebook-like platform</b> for handymen, integrating with <b>Salesforce and running on Heroku</b>.
            Designed to facilitate networking, job listings, and community engagement.
          </p>
          <p><b>Tech Stack:</b> .NET Core, Redis, Heroku, MongoDB, PostgreSQL, Hangfire</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">2019</span>
        </div>
      </div>

      <!-- YKK -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">YKK</h3>
          <div class="subheading mb-3">Vektora</div>
          <p>
            A complex project involving <b>multiple web applications, APIs, Windows services, and background jobs</b>,
            all built using .NET Core.
          </p>
          <p><b>Tech Stack:</b> .NET Core</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">2019</span>
        </div>
      </div>

      <!-- Garenta Rent a Car -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">
            Garenta Rent a Car
            <a href="https://www.garenta.com.tr/en/" target="_blank" rel="noopener noreferrer">link</a>
          </h3>
          <div class="subheading mb-3">Vektora</div>
          <p>
            Developed <b>web and branch management systems</b> for a leading car rental service.
            Integrated third-party services and optimized backend performance.
          </p>
          <p><b>Tech Stack:</b> .NET Core</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">2017</span>
        </div>
      </div>

      <!-- Vestel.com.tr -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">
            Vestel.com.tr
            <a href="https://www.vestel.com.tr/" target="_blank" rel="noopener noreferrer">link</a>
          </h3>
          <div class="subheading mb-3">Vektora</div>
          <p>
            Provided ongoing support for <b>Vestel.com.tr</b>, one of the highest-traffic sites in Vektora.
            Optimized integrations, enhanced site performance, and maintained CRM/SAP connections.
          </p>
          <p><b>Tech Stack:</b> .NET MVC, jQuery, LESS</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">2018</span>
        </div>
      </div>

      <!-- The Marmara Hotels Collection -->
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">
            The Marmara Hotels Collection
            <a href="https://www.themarmarahotels.com/" target="_blank" rel="noopener noreferrer">link</a>
          </h3>
          <div class="subheading mb-3">Vektora</div>
          <p>
            Developed and maintained the <b>The Marmara Hotels Collection</b> website, which was a finalist
            in the prestigious <b>Altın Örümcek Awards</b>.
          </p>
          <p><b>Tech Stack:</b> .NET WebForms, jQuery, LESS</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">2018</span>
        </div>
      </div>

    </div>
  </section>
</template>
<script lang="ts">
</script>