<template>
  <!-- Main Hero Section -->
  <div class="text-container">
    <div class="title">
      <span class="title-text">
        Kathmandu based developer crafting <br />
        & creating unique stories by delivering <br />
        interactive experiences.
      </span>
      <span class="desc">
        Front-End Developer and UX/UI Designer excelled in creating <br />
        Websites & Webapps.
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "PP Mori";

  @media (max-width: 568px) {
    display: block;
    align-items: none;
    position: absolute;
    top: 15rem;
    left: 3rem;
    right: 3rem;
  }
}

.title-text {
  color: var(--alternate-color);
  line-height: 1.1;
  letter-spacing: -1px;
  display: block;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-size: 2.6rem;
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  @media (max-width: 568px) {
    br {
      display: none;
    }
    font-size: 28px;
    line-height: 1.2;
  }

  @media (max-width: 468px) {
    font-size: 22px;
    line-height: 1.3;
  }

  @media (max-width: 382px) {
    font-size: 20.5008px;
    line-height: 1.3;
    letter-spacing: -0.6992px;
  }
}

.desc {
  color: var(--gray-color);
  line-height: 1.35;
  display: block;
  width: 100%;
  max-width: 700px;
  margin: 30px auto;
  letter-spacing: -0.5008px;
  font-size: 1.6rem;

  @media (max-width: 1200px) {
    font-size: 1.3438rem;
  }

  @media (max-width: 768px) {
    font-size: 1.0938rem;
    line-height: 1.4;
  }

  @media (max-width: 568px) {
    font-size: 0.9rem;
  }

  @media (max-width: 568px) {
    display: none;
  }
}
</style>
