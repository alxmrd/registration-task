<template>
  <div class="question-container">
    <h1 class="header">Why <span> Trade</span> with XM?</h1>
    <hr class="green-line" />
    <p class="description">
      We have been providing traders around the world with the same
      <span>premium experience</span> for over a decade. As an <span>industry-leader</span>, we know
      what the modern trader needs to be successful in the markets.
    </p>
  </div>
</template>

<script>
export default {
  name: 'QuestionContainer'
}
</script>

<style scoped>
/* The main container for the question section */
.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
  padding-left: 70px;
  padding-right: 70px;
  text-align: center;
}

/* Styles for the header text */
.header {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 43px;
}

/* Styles for the span elements inside the header and description */
.header span,
.description span {
  font-weight: 700;
}

/* Styles for the green line under the header */
.green-line {
  border: none;
  background-color: #29a643;
  width: 70px;
  height: 2px;
  margin: 25px 0px 25px 0px;
}

/* Styles for the description text */
.description {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

@media (min-width: 768px) {
  .description {
    line-height: 22px;
  }
}

@media (min-width: 1200px) {
  .description {
    width: 640px;
  }
}
</style>
