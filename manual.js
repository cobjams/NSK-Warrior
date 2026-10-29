/**
 * MANUAL MODULE - NSK WARRIOR
 * Provides the game manual content transcribed from the booklet pages
 * and helpers to display the manual in a scrollable modal overlay.
 */

const MANUAL_HTML_CONTENT = `
<div class="manual-content-wrapper">
  <h2 class="manual-title">NSK WARRIOR MANUAL</h2>

  <details open>
    <summary>Cover & Information</summary>
    <div class="manual-section">
      <h3>NSK WARRIOR Instruction Manual</h3>
      <p>Official Game Guide & Reference Manual (SLUS-00812)</p>
      <img src="booklet/pages/1.webp" alt="Manual Cover" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Story & Background</summary>
    <div class="manual-section">
      <h3>Story Overview</h3>
      <p>You wake up in a strange complex with no memory of how you arrived. Danger lurks around every corridor. Uncover the secrets of the complex and find a way to escape.</p>
      <img src="booklet/pages/2.webp" alt="Story Overview" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Game Controls</summary>
    <div class="manual-section">
      <h3>Control Scheme</h3>
      <ul>
        <li><strong>D-Pad:</strong> Move character / Navigate menus</li>
        <li><strong>&#x2716; (Cross):</strong> Confirm / Interact / Examine</li>
        <li><strong>&#x25EF; (Circle):</strong> Cancel / Dash / Hold to Clip Walls (Test Play)</li>
        <li><strong>&#x25B3; (Triangle):</strong> Open Main Menu / Status</li>
        <li><strong>&#x25A1; (Square):</strong> Secondary Action / Map toggle</li>
        <li><strong>START:</strong> Pause / Confirm</li>
        <li><strong>SELECT:</strong> Version Information / Switch mode</li>
      </ul>
      <img src="booklet/pages/3.webp" alt="Controls Page" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Menu System</summary>
    <div class="manual-section">
      <h3>Main & Pause Menus</h3>
      <p>Access the main menu during gameplay to view party status, manage items, equip gear, and adjust settings.</p>
      <img src="booklet/pages/4.webp" alt="Menu System" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Battle System</summary>
    <div class="manual-section">
      <h3>Combat Fundamentals</h3>
      <p>Turn-based encounters test your combat strategy. Select Attack, Magic/Skills, Guard, or Use Items. Running away is possible in most encounters.</p>
      <img src="booklet/pages/5.webp" alt="Battle System" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Character Statistics</summary>
    <div class="manual-section">
      <h3>Attributes & Growth</h3>
      <ul>
        <li><strong>HP (Health Points):</strong> Character vitality. Reaching 0 results in unconsciousness.</li>
        <li><strong>MP (Magic Points):</strong> Spent to cast spells and execute special combat skills.</li>
        <li><strong>ATK / DEF:</strong> Physical offensive and defensive power.</li>
        <li><strong>MAG / RES:</strong> Magic offensive strength and resistance.</li>
        <li><strong>SPD:</strong> Turn frequency in battle order.</li>
      </ul>
      <img src="booklet/pages/6.webp" alt="Statistics Page" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Items & Equipment</summary>
    <div class="manual-section">
      <h3>Inventory Management</h3>
      <p>Equip weapons and armor found throughout the complex or bought from merchants. Use potions and restorative items to maintain health between fights.</p>
      <img src="booklet/pages/7.webp" alt="Items and Equipment" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Area 1 - Sector 1 Map</summary>
    <div class="manual-section">
      <h3>Sector 1 Overview</h3>
      <p>The initial entry level containing basic supplies and training areas.</p>
      <img src="booklet/pages/8.webp" alt="Sector 1 Map" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Area 2 - Central Hub</summary>
    <div class="manual-section">
      <h3>Central Operations</h3>
      <p>A central facility linking various wings and containment units.</p>
      <img src="booklet/pages/9.webp" alt="Central Hub Map" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Area 3 - Research Lab</summary>
    <div class="manual-section">
      <h3>Research & Development Lab</h3>
      <p>Hazardous area housing experimental equipment and security locks.</p>
      <img src="booklet/pages/10.webp" alt="Research Lab Map" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Area 4 - Office Walkthrough (for cheaters)</summary>
    <div class="manual-section">
      <h3>A Walkthrough of the Office</h3>
      <ol>
        <li>Gain entrance into the Office by prying open the door in the Nurse's room with a hook.</li>
        <li>The light switch is below the Nurse's room near the restrooms.</li>
        <li>Find a key under a desk, and unlock the Conference Room C.</li>
        <li>Use the terminal inside Conference Room C to lift security doors.</li>
        <li>Proceed to Executive Office 5 to acquire keycard level 3.</li>
      </ol>
      <img src="booklet/pages/11.webp" alt="Office Map Walkthrough 1" class="manual-img">
      <img src="booklet/pages/12.webp" alt="Office Map Walkthrough 2" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Area 5 - Sub-levels & Maintenance</summary>
    <div class="manual-section">
      <h3>Maintenance Tunnels & Sub-levels</h3>
      <p>Underground passageways, dark corridors, and ventilation shafts leading to deeper secrets.</p>
      <img src="booklet/pages/13.webp" alt="Sub-levels Map" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Special Mechanics & Secrets</summary>
    <div class="manual-section">
      <h3>Game Mechanics & Secrets</h3>
      <p>Explore corners, examine unusual walls, and look for hidden passkeys. Certain game versions offer specialized features such as wall clipping or modified progression.</p>
      <img src="booklet/pages/14.webp" alt="Special Mechanics" class="manual-img">
      <img src="booklet/pages/17.webp" alt="Hints and Secrets" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Boss Tactics & Combat Strategies</summary>
    <div class="manual-section">
      <h3>Boss Guide</h3>
      <p>Analyze boss attack patterns, prepare appropriate elemental protection, and keep healing items stocked before boss rooms.</p>
      <img src="booklet/pages/15.webp" alt="Boss Guide" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Version Comparison</summary>
    <div class="manual-section">
      <h3>Game Versions</h3>
      <ul>
        <li><strong>Original Game (2008):</strong> Unfiltered PSX release experience.</li>
        <li><strong>Version 1.1 (2024):</strong> Bug fixes and updated skills system.</li>
        <li><strong>Keen-Fine Edition:</strong> Less linear progression, extra content, upgradable weapons.</li>
        <li><strong>Test Play Edition:</strong> Testing utilities including wall clip and battle escape shortcuts.</li>
      </ul>
      <img src="booklet/pages/16.webp" alt="Version Notes" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Audio & Credits</summary>
    <div class="manual-section">
      <h3>Credits & Audio Information</h3>
      <p>Original soundtrack composed for RPG Maker PSX. Special thanks to all contributors and testers.</p>
      <img src="booklet/pages/18.webp" alt="Credits" class="manual-img">
    </div>
  </details>

  <details>
    <summary>Save System & Troubleshooting</summary>
    <div class="manual-section">
      <h3>Save Data & Web Storage</h3>
      <p>Save states are stored in browser IndexedDB. Use the Save Manager to export save bundles (.state.txt) for backup or transfer across devices.</p>
      <img src="booklet/pages/19.webp" alt="Save Data Info" class="manual-img">
      <img src="booklet/pages/20.webp" alt="Back Cover" class="manual-img">
    </div>
  </details>
</div>
`;

function showManualModal() {
  if (typeof showModal === 'function') {
    return showModal({ text: MANUAL_HTML_CONTENT }, 'info');
  }
  return Promise.resolve();
}

if (typeof window !== 'undefined') {
  window.showManualModal = showManualModal;
  window.MANUAL_HTML_CONTENT = MANUAL_HTML_CONTENT;
}
