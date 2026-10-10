(() => {
  const tabs = document.querySelector('[data-pricing-tabs]');
  const grid = document.querySelector('[data-pricing-extras]');
  if (!tabs || !grid) return;

  const extras = [
    [['UX Audit','From $120'],['Additional Website Page','From $60–120'],['Additional Breakpoint','From $100–180'],['Design System','From $240'],['Motion Concept','From $120'],['Design QA / Support','From $25/hour']],
    [['App UX Audit','From $120'],['Additional App Screen','From $35–60'],['Interactive Prototype','From $120'],['iOS / Android Adaptation','From $160'],['Design System','From $240'],['Design QA / Support','From $25/hour']],
    [['AI Image','From $25–40'],['AI Video up to 2 Minutes','From $50'],['Advanced AI Video','From $300'],['Custom AI Character','From $150'],['Additional Video Format','From $30'],['Motion Concept','From $120']],
    [['Additional Slide','From $12–25'],['Presentation Structure','From $65'],['Infographic','From $40'],['Editable Template','From $100'],['Slide Animation','From $65'],['Rush Delivery','+20% of project']],
    [['Social Media Creative','From $25'],['Post Carousel','From $65–100'],['Stories Adaptation','From $12'],['Platform Adaptation','From $20'],['AI Image','From $25–40'],['Monthly Content System','From $180']]
  ];

  const render = button => {
    const buttons = [...tabs.querySelectorAll('button')];
    const active = button || tabs.querySelector('[aria-selected="true"],.active') || buttons[0];
    const items = extras[Math.max(0, buttons.indexOf(active))] || extras[0];
    grid.innerHTML = items.map(([name, price]) => `<div class="pricing-extra"><span>${name}</span><strong>${price}</strong></div>`).join('');
  };

  tabs.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (button) render(button);
  });
  render();
})();
