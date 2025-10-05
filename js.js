// Windows 97 Desktop Experience

const dreamIcon = document.getElementById('dreamIcon');
const dreamWindow = document.getElementById('dreamWindow');
const closeBtn = document.getElementById('closeBtn');
const taskbarWindow = document.getElementById('taskbarWindow');
const titleBar = document.querySelector('.title-bar');

let clickCount = 0;
let clickTimer = null;
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

// Update time in taskbar
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById(
    'time'
  ).textContent = `${displayHours}:${displayMinutes} ${ampm}`;
}

updateTime();
setInterval(updateTime, 1000);

// Open window automatically on page load
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    openWindow();
  }, 500); // Small delay for dramatic effect
});

// Double-click detection for icon
dreamIcon.addEventListener('click', function () {
  clickCount++;

  if (clickCount === 1) {
    // Single click - select icon
    dreamIcon.classList.add('selected');

    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, 300);
  } else if (clickCount === 2) {
    // Double click - open window
    clearTimeout(clickTimer);
    clickCount = 0;
    openWindow();
  }
});

// Open window
function openWindow() {
  dreamWindow.classList.add('active');
  taskbarWindow.style.display = 'flex';
  taskbarWindow.classList.add('active');
}

// Close window
closeBtn.addEventListener('click', function () {
  dreamWindow.classList.remove('active');
  taskbarWindow.style.display = 'none';
  taskbarWindow.classList.remove('active');
  dreamIcon.classList.remove('selected');
});

// Taskbar item click
taskbarWindow.addEventListener('click', function () {
  if (dreamWindow.classList.contains('active')) {
    dreamWindow.classList.remove('active');
    taskbarWindow.classList.remove('active');
  } else {
    dreamWindow.classList.add('active');
    taskbarWindow.classList.add('active');
  }
});

// Window dragging
titleBar.addEventListener('mousedown', dragStart);
titleBar.addEventListener('touchstart', dragStart);

function dragStart(e) {
  if (e.target.tagName === 'BUTTON') return;

  if (e.type === 'touchstart') {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (
    e.target === titleBar ||
    e.target === titleBar.querySelector('.title-bar-text')
  ) {
    isDragging = true;
  }
}

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

function drag(e) {
  if (isDragging) {
    e.preventDefault();

    if (e.type === 'touchmove') {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dreamWindow);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px))`;
}

document.addEventListener('mouseup', dragEnd);
document.addEventListener('touchend', dragEnd);

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;
  isDragging = false;
}

// Deselect icon when clicking desktop
document.querySelector('.desktop').addEventListener('click', function (e) {
  if (e.target === this) {
    dreamIcon.classList.remove('selected');
  }
});

// Easter egg: Minimize button (just hides window for now)
document.querySelector('.minimize-btn').addEventListener('click', function () {
  dreamWindow.classList.remove('active');
  taskbarWindow.classList.remove('active');
});

// Maximize button (just for show - no functionality)
document.querySelector('.maximize-btn').addEventListener('click', function () {
  // Could add maximize functionality here
  console.log('Maximize clicked');
});

// Start Menu functionality
const startButton = document.getElementById('startButton');
const startMenu = document.getElementById('startMenu');
const contactItem = document.getElementById('contactItem');
const contactSubmenu = document.getElementById('contactSubmenu');
const emailItem = document.getElementById('emailItem');

let startMenuOpen = false;
let contactSubmenuOpen = false;

// Toggle Start Menu
startButton.addEventListener('click', function (e) {
  e.stopPropagation();
  startMenuOpen = !startMenuOpen;

  if (startMenuOpen) {
    startMenu.classList.add('active');
  } else {
    startMenu.classList.remove('active');
    contactSubmenu.classList.remove('active');
    contactSubmenuOpen = false;
  }
});

// Show contact submenu
contactItem.addEventListener('mouseenter', function () {
  contactSubmenu.classList.add('active');
  contactSubmenuOpen = true;
});

contactItem.addEventListener('click', function (e) {
  e.stopPropagation();
  contactSubmenu.classList.add('active');
  contactSubmenuOpen = true;
});

// Hide submenus when leaving the menu area
startMenu.addEventListener('mouseleave', function () {
  setTimeout(() => {
    if (!contactSubmenuOpen) {
      contactSubmenu.classList.remove('active');
    }
  }, 100);
});

contactSubmenu.addEventListener('mouseleave', function () {
  contactSubmenu.classList.remove('active');
  contactSubmenuOpen = false;
});

// Email obfuscation - click to open email client
emailItem.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();

  const user = this.getAttribute('data-user');
  const domain = this.getAttribute('data-domain');
  const atSymbol = String.fromCharCode(64); // @
  const email = user + atSymbol + domain;

  window.location.href = 'mailto:' + email;

  // Close menus
  startMenu.classList.remove('active');
  contactSubmenu.classList.remove('active');
  startMenuOpen = false;
  contactSubmenuOpen = false;
});

// Close Start Menu when clicking outside
document.addEventListener('click', function (e) {
  if (
    startMenuOpen &&
    !startMenu.contains(e.target) &&
    !contactSubmenu.contains(e.target) &&
    e.target !== startButton
  ) {
    startMenu.classList.remove('active');
    contactSubmenu.classList.remove('active');
    startMenuOpen = false;
    contactSubmenuOpen = false;
  }
});
