<template>
  <div class="projects-container" id="projects">
    <div class="projects-main">
      <div class="projects-header">
        <span>Selected Works</span>
      </div>
      <div class="projects-body">
        <a href="https://dpesports.netlify.app" target="_blank">
          <div class="dp-esports"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects-container {
  width: 100%;
  height: 150vh;
  background: var(--primary-color);
  border-top: 2px solid #2b2b2b;
  margin: 0;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 20px 0;
  }

  @media screen and (max-width: 568px) {
    background: linear-gradient(90deg, #101010, #161616, #101010);
    margin: 0;
  }

  .projects-main {
    font-family: "PP Neue Montreal";
    color: var(--alternate-color);

    .projects-header {
      display: none;

      @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        margin-bottom: 20px;
      }

      @media screen and (max-width: 568px) {
        font-size: 1rem !important;
      }
    }

    // Projects Body
    .projects-body {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 140px;

      @media screen and (max-width: 1364px) {
        margin-top: 80px;
      }

      @media screen and (max-width: 768px) {
        margin-top: 100px;
        flex-direction: column;
        margin-top: 0;
        padding: 0 20px 0 20px;
      }

      .dp-esports {
        width: 75rem;
        background: linear-gradient(#2b2b2b, #101010);
        height: 42rem;
        border-radius: 16px;

        @media screen and (max-width: 1364px) {
          width: 90vw;
          height: 48vw;
        }

        @media screen and (max-width: 768px) {
          height: 58vw;
        }
      }
    }
  }
}
</style>
