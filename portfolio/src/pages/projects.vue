<template>
  <div class="projects-container" id="projects">
    <div class="projects-main">
      <div class="projects-header">
        <span>Selected Works</span>
      </div>
      <div class="projects-body">
        <div class="dp-esports project">
          <div class="project-image">
            <img src="../assets/dp.png" alt="DP Esports" />
          </div>
          <div class="title-text">DP Esports</div>
          <div class="title-desc">
            Official website for DP Esports Valorant team
          </div>
        </div>
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

    .projects-body {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 140px;

      @media screen and (max-width: 1364px) {
        margin-top: 80px;
      }

      @media screen and (max-width: 768px) {
        margin-top: 0;
        flex-direction: column;
        // padding: 0 20px;
      }

      .project {
        width: 60rem;
        background: linear-gradient(190deg, #282828, #101010);
        height: 35rem;
        border-radius: 16px;
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        padding: 2rem;
        outline: 2px solid #2b2b2b;
        overflow: hidden;

        @media screen and (max-width: 1196px) {
          width: 70vw;
          height: 48vw;
        }

        @media screen and (max-width: 768px) {
          height: auto;
          padding: 2vw;
        }

        .title-text {
          color: var(--alternate-color);
          line-height: 1.1;
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: 0;
          text-shadow: 0 -2px 10px rgba(255, 255, 255, 0.2);
          align-self: flex-start;

          @media screen and (max-width: 768px) {
            font-size: 3vw;
          }
        }

        .title-desc {
          color: rgba(245, 245, 245, 0.6);
          line-height: 1.25;
          max-width: 700px;
          margin: 0 0 6rem 0;
          font-size: 1rem;
          letter-spacing: 0.25px;
          align-self: flex-start;

          @media screen and (max-width: 768px) {
            font-size: 2.5vw;
          }
        }

        .project-image {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          width: 90%;
          height: calc(100% - 10rem);

          img {
            width: 100%;
            height: 34vw;
            border-radius: 10px;
            box-shadow: 0 30px 40px 5px rgba(0, 0, 0, 0.25);
            transition: transform 0.3s ease;
          }
        }
      }
    }
  }
}

// Grayscale
</style>
