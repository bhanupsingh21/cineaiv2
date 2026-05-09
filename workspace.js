const agents = [
  { icon: 'clapperboard', title: 'Director', task: 'Ready for new project', progress: 0, status: 'idle' },
  { icon: 'camera', title: 'Cinematographer', task: 'Awaiting shot list', progress: 0, status: 'idle' },
  { icon: 'file-text', title: 'Script Agent', task: 'Idle', progress: 0, status: 'idle' },
  { icon: 'mic', title: 'Voice Agent', task: 'Idle', progress: 0, status: 'idle' },
  { icon: 'music', title: 'Music Composer', task: 'Idle', progress: 0, status: 'idle' },
  { icon: 'scissors', title: 'Editing Agent', task: 'Idle', progress: 0, status: 'idle' },
];

const scenes = [
  { id: 1, duration: '0:00 - 0:08', thumb: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=300&q=80', active: false },
  { id: 2, duration: '0:08 - 0:15', thumb: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=300&q=80', active: false },
  { id: 3, duration: '0:15 - 0:24', thumb: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80', active: true },
  { id: 4, duration: '0:24 - 0:32', thumb: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80', active: false },
];

const pipelineStages = [
  { icon: 'brain-circuit', name: 'Story Analysis' },
  { icon: 'file-edit', name: 'Screenplay' },
  { icon: 'layout', name: 'Shot Planning' },
  { icon: 'users', name: 'Character Creation' },
  { icon: 'image', name: 'Scene Generation' },
  { icon: 'mic', name: 'Voice Generation' },
  { icon: 'music', name: 'Music & FX' },
  { icon: 'scissors', name: 'Editing' },
  { icon: 'video', name: 'Rendering' },
];

document.addEventListener('DOMContentLoaded', () => {
  renderAgents();
  renderThumbnails();
  initInteractions();
});

function renderAgents() {
  const list = document.getElementById('ws-agents-list');
  if(!list) return;
  list.innerHTML = agents.map(agent => `
    <div class="agent-item">
      <div class="agent-item-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <i data-lucide="${agent.icon}" class="icon-sm"></i>
          <span>${agent.title}</span>
        </div>
        <div class="agent-item-status">
          <div class="status-indicator ${agent.status}"></div>
        </div>
      </div>
      <div class="agent-item-task">${agent.task}</div>
      <div class="agent-progress">
        <div class="agent-progress-fill" style="width: ${agent.progress}%"></div>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function renderThumbnails() {
  const container = document.getElementById('scene-thumbnails');
  if(!container) return;
  container.innerHTML = scenes.map(scene => `
    <div class="scene-thumb ${scene.active ? 'active' : ''}">
      <img src="${scene.thumb}" alt="Scene ${scene.id}">
      <div class="scene-thumb-info">
        <span>Scene ${scene.id}</span>
        <span>${scene.duration}</span>
      </div>
    </div>
  `).join('');
}

function initInteractions() {
  // Generate Video Button Logic
  const genBtn = document.getElementById('ws-generate-btn');
  const pipelineContainer = document.getElementById('ai-pipeline');
  const playerVideo = document.getElementById('player-video');
  const playerPlaceholder = document.querySelector('.player-placeholder');
  
  if(genBtn && pipelineContainer) {
    genBtn.addEventListener('click', () => {
      // Show pipeline
      pipelineContainer.style.display = 'block';
      const stagesContainer = pipelineContainer.querySelector('.pipeline-stages');
      stagesContainer.innerHTML = pipelineStages.map((stage, idx) => `
        <div class="pipeline-stage ${idx === 0 ? 'active' : ''}" id="stage-${idx}">
          <i data-lucide="${stage.icon}" class="stage-icon"></i>
          <div class="stage-name">${stage.name}</div>
          <div class="stage-status">${idx === 0 ? 'In Progress...' : 'Pending'}</div>
        </div>
      `).join('');
      lucide.createIcons();
      
      // Update pipeline status in top nav
      const statusIndicator = document.querySelector('.pipeline-status .status-indicator');
      const statusText = document.querySelector('.pipeline-status span');
      if(statusIndicator) {
        statusIndicator.classList.remove('idle');
        statusIndicator.classList.add('active');
        statusText.textContent = 'AI Pipeline Active';
      }

      // Simulate pipeline progression
      let currentStage = 0;
      const interval = setInterval(() => {
        const prevStageEl = document.getElementById(`stage-${currentStage}`);
        if(prevStageEl) {
          prevStageEl.classList.remove('active');
          prevStageEl.classList.add('done');
          prevStageEl.querySelector('.stage-status').textContent = 'Complete';
        }
        
        currentStage++;
        
        if(currentStage < pipelineStages.length) {
          const nextStageEl = document.getElementById(`stage-${currentStage}`);
          nextStageEl.classList.add('active');
          nextStageEl.querySelector('.stage-status').textContent = 'In Progress...';
        } else {
          clearInterval(interval);
          statusIndicator.classList.remove('active');
          statusIndicator.classList.add('idle');
          statusText.textContent = 'AI Pipeline Complete';
          
          // Show video in player
          if(playerPlaceholder) playerPlaceholder.style.display = 'none';
          if(playerVideo) playerVideo.classList.remove('hidden');
        }
      }, 800);
    });
  }

  // Prompt Chips Interaction
  const chips = document.querySelectorAll('.prompt-quick-chips .chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      chips.forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  // Handle URL Params for auto-start
  const urlParams = new URLSearchParams(window.location.search);
  const promptParam = urlParams.get('prompt');
  const autoStart = urlParams.get('autoStart');

  if (promptParam) {
    const promptInput = document.getElementById('ws-prompt-input');
    if (promptInput) promptInput.value = promptParam;
  }

  if (autoStart === 'true' && genBtn) {
    setTimeout(() => {
      genBtn.click();
    }, 500);
  }
}
