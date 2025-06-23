 function toggleList(id, forceShow = false) {
    const ul = document.getElementById(id);
    if (forceShow) {
      ul.style.display = 'block';
    } else {
      ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
    }
  }

  let currentStep = 0;
  const steps = document.querySelectorAll('#steps li');
  const progressBar = document.getElementById('progressBar');
  const celebration = document.getElementById('celebration');

  function startCooking() {
    // Make sure both lists are shown
    toggleList('ingredients', true);
    toggleList('steps', true);

    // Reset celebration and steps
    celebration.style.display = 'none';
    currentStep = 0;
    steps.forEach(step => step.classList.remove('active'));
    steps[0].classList.add('active');
    updateProgress();
  }

  function nextStep() {
    const stepsList = document.getElementById('steps');
    if (stepsList.style.display !== 'block') return; // Don't proceed if steps are hidden

    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove('active');
      currentStep++;
      steps[currentStep].classList.add('active');
      updateProgress();
    } else if (currentStep === steps.length - 1) {
      steps[currentStep].classList.add('active');
      progressBar.style.width = '100%';
      celebration.style.display = 'block';
      fireConfetti();
    }
  }

  function updateProgress() {
    const percent = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = percent + '%';
  }

  function fireConfetti() {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });
  }