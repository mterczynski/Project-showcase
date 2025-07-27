class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');
    const description = this.getAttribute('description');
    const technologies = this.getAttribute('technologies');
    const playUrl = this.getAttribute('play-url');
    const websiteUrl = this.getAttribute('website-url');
    const githubUrl = this.getAttribute('github-url');

    this.innerHTML = `
      <div class="column">
        <article class="ui card">
          <div class="ui slide masked reveal image">
            <img
              src="${image}"
              class="visible content"
              alt="${title} project preview"
              loading="lazy" />
            <div class="hidden content linkButtons">
              ${playUrl ? `
                <a class="projectLink" href="${playUrl}" aria-label="Play ${title}">
                  <button class="ui blue button linkButton">Play</button>
                </a>
              ` : ''}
              ${githubUrl ? `
                <a class="projectLink" href="${githubUrl}" aria-label="View ${title} on GitHub">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
              ` : ''}
              ${websiteUrl ? `
                <a class="projectLink" href="${websiteUrl}" aria-label="Visit ${title} website">
                  <button class="ui blue button linkButton">Website</button>
                </a>
              ` : ''}
            </div>
          </div>
          <div class="content">
            <h3 class="header">${title}</h3>
            <div class="meta">${description}</div>
          </div>
          <div class="extra content">
            <i class="hashtag icon" aria-hidden="true"></i>
            ${technologies}
          </div>
        </article>
      </div>
    `;
  }
}

customElements.define('project-card', ProjectCard);
