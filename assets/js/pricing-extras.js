(() => {
  const tabs = document.querySelector('[data-pricing-tabs]');
  const grid = document.querySelector('[data-pricing-extras]');
  if (!tabs || !grid) return;

  const extras = [
    [['UX Audit','From $150'],['Additional Website Page','From $80–150'],['Additional Breakpoint','From $120–220'],['Design System','From $300'],['Motion Concept','From $150'],['Design QA / Support','From $30/hour']],
    [['App UX Audit','From $150'],['Additional App Screen','From $40–70'],['Interactive Prototype','From $150'],['iOS / Android Adaptation','From $200'],['Design System','From $300'],['Design QA / Support','From $30/hour']],
    [['Additional Logo Variation','From $70'],['Branded Application','From $40–120'],['Social Media Templates','From $90'],['Mini Brand Guidelines','From $150'],['Packaging Layout','From $120–220'],['Motion Logo','From $150']],
    [['AI Image','From $30–50'],['Short AI Video','From $100'],['Advanced AI Video','From $500'],['Custom AI Character','From $200'],['Additional Video Format','From $40'],['Motion Concept','From $150']],
    [['Additional Slide','From $15–30'],['Presentation Structure','From $80'],['Infographic','From $50'],['Editable Template','From $120'],['Slide Animation','From $80'],['Rush Delivery','+20% of project']],
    [['Social Media Creative','From $30'],['Post Carousel','From $80–120'],['Stories Adaptation','From $15'],['Platform Adaptation','From $25'],['AI Image','From $30–50'],['Monthly Content System','From $220']]
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
