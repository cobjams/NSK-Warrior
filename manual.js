/**
 * MANUAL MODULE - NSK WARRIOR
 * Provides the game manual content organized into chapters
 * and helpers to display the manual in a scrollable modal overlay.
 */

const MANUAL_HTML_CONTENT = `
<div class="manual-content-wrapper">
  <h2 class="manual-title">NSK WARRIOR MANUAL</h2>

  <details>
    <summary>An Adventure of Janitorial Intrigue Begins</summary>
    <div class="manual-section">
      <p>Tim, a janitor, arrives early to work one morning, eager to begin his day at the NSK ball bearing factory. His enthusiasm quickly fades, though, once he sets foot inside the forbidding front entrance doors.</p>
      <p>The factory is in shambles!</p>
      <p>This is normal. What isn’t is the apparent absence of Tim’s mentor, Jim, NSK’s Janitor in Chief. With the neglect of this NSK Warrior and his trusty Janitor Weapons, the factory has fallen into a state of chaos.</p>
      <p>It is up to Tim to recommence the war on dirt. The fate of NSK now rests upon the shoulders of this aspiring young janitor!</p>
      <p>Yet…</p>
      <p>Evils are lurking in the dark recesses of NSK. Evils long held at bay by the sacred janitorial equipment.</p>
      <p>As Tim embarks on his quest, he will encounter strange and disgusting creatures, perform mindless and repetitive tasks, discover in himself powerful latent abilities, learn new skills, acquire wealth, uncover top secret documents, and become terribly frustrated. He will join forces with old friends and enter into battle with the strength of camaraderie.</p>
      <p>The deeper he descends into the stinking depths of NSK, the closer he will come to fulfilling his destiny:</p>
      <p><strong>To become... an NSK WARRIOR!</strong></p>
    </div>
  </details>

  <details>
    <summary>Getting Started</summary>
    <div class="manual-section">
      <p><em>(Original PS1 instructions)</em></p>
      <h4>Loading the Game</h4>
      <ol>
        <li>Insert RPG Maker disc.</li>
        <li>Turn on Playstation.</li>
        <li>After startup select "RPG Maker".</li>
        <li>Insert memory card with game data. Check lcd screen on memory card and make sure page is set to "01". (Use the buttons on the card to change pages.)</li>
        <li>In the "Game; Edit; Demo" screen select "Game".</li>
        <li>If playing for the first time, select "Start". If continuing play, select "Continue".</li>
        <li>Select "-WARRIOR-" from the memory card screen. System data will begin to load. Due to the amount of high-quality graphics, total load time will take several minutes.</li>
      </ol>
      <p><strong>Important:</strong> Do not press any buttons on the Playstation controller during the loading process or game data may not be loaded.</p>
      <ol start="8">
        <li>After system data is loaded, a message will appear: "Scenario Data Not Found". Use the buttons on the memory card to change the page to "02". (Do not press any buttons on the Playstation controller!) Wait a couple seconds, data should begin to load.</li>
        <li>When this message appears: "M Cut Not Found" change the page on the memory card to "03". After a couple seconds data should begin to load.</li>
        <li>Game will start automatically after loading. Enjoy!</li>
      </ol>
      <p><em>Note: If loading of the game is unsuccessful or is interrupted simply restart the Playstation and repeat steps 3-9.</em></p>
    </div>
  </details>

  <details>
    <summary>Controls / Menu Screen</summary>
    <div class="manual-section">
      <h4>Controller:</h4>
      <ul>
        <li>➕ move / scroll</li>
        <li>☐ menu</li>
        <li>△ unequip</li>
        <li>◯ back</li>
        <li>╳ select / check</li>
      </ul>
      <h4>Keyboard Controls:</h4>
      <ul>
        <li>Move/Menu nav: directional keys</li>
        <li>Check/Confirm: X</li>
        <li>Menu: S</li>
        <li>Back: Z</li>
      </ul>
      <h4>Menu Screen</h4>
      <ul>
        <li><strong>Stuff</strong> - you know, "things", "items", your inventory.</li>
        <li><strong>Moves</strong> - not magic, moves. (see p. 12)</li>
        <li><strong>Status</strong> - check the values of your STR (strength), DEF (defence), STA (stamina), ...etc. (see Appendix "Understanding Your Status")</li>
        <li><strong>Equip</strong> - you can equip your head, body, both hands, and 2 accessories with stuff.</li>
        <li><strong>S Atk</strong> - "special attacks" (see p. 12)</li>
        <li><strong>Settings</strong> - configure gameplay options.</li>
      </ul>
      <h4>Saving Your Game</h4>
      <p>Follow Duane’s instructions about "saving steps" in the Cafeteria. You can use the memory card provided to save your progress or you can use your own card. To return to the game press "o".</p>
    </div>
  </details>

  <details>
    <summary>Characters</summary>
    <div class="manual-section">
      <ul>
        <li><strong>Tim:</strong> A diligent young grease-scooper who loves his job.</li>
        <li><strong>Jim:</strong> This veteran NSK Warrior is the voice of janitorial wisdom; Tim's mentor.</li>
        <li><strong>James:</strong> Jim's firstborn son, a floor-sweeper and comrade of Tim. He dreams of someday becoming a true janitor like his father.</li>
        <li><strong>Colby:</strong> A vigilante trash hauler with the gift of sarcasm.</li>
        <li><strong>Craig:</strong> A stout box-crusher with an affinity for Altoids.</li>
        <li><strong>Duane:</strong> An ally in the war against grime. Duane offers helpful advice and provides needed supplies.</li>
        <li><strong>?:</strong> There are other characters encountered, some friendly, some not, and some just plain mysterious.</li>
      </ul>
      <h4>Skills:</h4>
      <p>Each main character is endowed with certain abilities. These remain virtually constant throughout the game.</p>
      <ul>
        <li><strong>Tim</strong> - Grease Scooper - HP drain</li>
        <li><strong>James</strong> - Floor Sweeper - counter attack</li>
        <li><strong>Colby</strong> - Trash Hauler - treasure find up</li>
        <li><strong>Craig</strong> - Box Crusher - 1/2 MP cost</li>
      </ul>
      <p><em>Update: Skills can now be learned once they're unlocked. And more skills are now available.</em></p>
    </div>
  </details>

  <details>
    <summary>The Janitor Weapons</summary>
    <div class="manual-section">
      <p>Primary implements of an NSK Warrior for battling the wretched filth of NSK.</p>
      <ul>
        <li><strong>Wet Mop:</strong> Equip this weapon and use it as a club to subdue your foes. Its full potential is harnessed only after learning a special attack - "MOP-UP!" The mop can also be used to clean up some grease spots.</li>
        <li><strong>Broom:</strong> Use this tool to clear a path through any brown-colored dirt. Also, use it as a club to subdue your foes. Once again, its full potential will only be revealed when a special attack is learned.</li>
        <li><strong>Dust Mop:</strong> The most commonly asked question regarding the use of this weapon is: "Can it be equipped, and subsequently be used as a club to subdue my foes?" Answer: Yes! Also, use it as an item to clear a path through any grey-colored dirt. Its full potential can be utilized after... (blah, blah, blah).</li>
        <li><strong>Dust Pan:</strong> Use it to scoop up dirt - Duh! Also it works well as a shield whilst skirmishing with foes.</li>
        <li><strong>Cart:</strong> Hmmm... You'll just have to find out yourself…</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Stuff</summary>
    <div class="manual-section">
      <p>These are the "items" acquired in the game.</p>
      <ul>
        <li><strong>Hook:</strong> An ingenious invention with multiple applications.</li>
        <li><strong>Gloves:</strong> These are equipped as a shield to increase defense (juke) during battles.</li>
        <li><strong>Accessories:</strong> Certain items such as ear plugs can be equipped to enhance the status of party members. Each member of the party can equip two accessories.</li>
        <li><strong>Snack foods:</strong> At vending machines purchase snacks to replenish health, cure maladies, or increase some maximum values in a party member's status.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Moves and Special Attacks</summary>
    <div class="manual-section">
      <p><strong>—KNOW THE DIFFERENCE!</strong></p>
      <p><strong>Moves:</strong> This is the magic of the game. However, since most real janitors employ little, if any spiritism, this parameter is more appropriately named: "Moves." Moves include attacks, cures and so forth. All these abilities cost MP (Move Points) each time they're used, by either the main characters or their enemies.</p>
      <p><strong>Special Attacks:</strong> These attacks use HP rather than MP. For example, for each of the Janitor Weapons a corresponding special attack can be learned.</p>
      <ul>
        <li>Wit (Move)</li>
        <li>Simple Green (Move)</li>
        <li>Mop-Up! (Special Attack)</li>
      </ul>
      <p><em>Note: There are 4 classes or kinds of moves in the game: Soap, Flame, Grease, and none. (see chart in Appendix)</em></p>
    </div>
  </details>

  <details>
    <summary>Foes</summary>
    <div class="manual-section">
      <ul>
        <li>Grease / Mutated Plants</li>
        <li>Mutated NSKers</li>
        <li>"The Smell" and "The Noise" - Invisible Adversaries</li>
        <li>And many more...!</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Battles</summary>
    <div class="manual-section">
      <p>When an enemy is encountered the music will change abruptly and the "Battle Screen" will appear. You will be presented with a number of options:</p>
      <p><strong>Fight</strong> - If you chose to fight, another set of options will appear:</p>
      <ul>
        <li><strong>ATK</strong> - standard attack using weapons equipped in both hands.</li>
        <li><strong>GRD</strong> - guard fortifies your defence.</li>
        <li><strong>Stuff</strong> - use items in your inventory.</li>
        <li><strong>Equip</strong> - this option does not work - unless it does.</li>
        <li><strong>Moves</strong> - bust a move on your opponent.</li>
        <li><strong>S ATK</strong> - use a special attack.</li>
      </ul>
      <p><strong>Auto</strong> - If you're a lazy person, then this is the option for you! However, you have no control over the use of stuff or moves. (To escape "auto" just press buttons frantically; this seems to work.)</p>
      <p><strong>Flee</strong> - Sometimes it's the course of wisdom to run away - if that's what you need to tell yourself, coward. (This option won't work in Boss Battles or with any event-triggered battles.)</p>
      <p><strong>Plan</strong> - Battle options.</p>
      <p><strong>Config</strong> - more options.</p>
      <p><em>Note: You have to equip any weapons you acquire in order to use them in battle. To use a weapon as an item outside of battle, it needs to be unequipped. To unequip a weapon, go to your status screen, select equip, and select the weapon you want unequipped. When the list appears select a weapon to replace it or a blank spot.**</em></p>
      <p><em>**Edit: Alternatively, use the triangle button to unequip items from the Equip menu.</em></p>
    </div>
  </details>

  <details>
    <summary>Appendix</summary>
    <div class="manual-section">
    
    <style>
  .nsk-moves-widget,
  .nsk-moves-widget * {
    box-sizing: border-box;
  }
  .nsk-moves-widget {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fcfaf5;
    color: #222;
    border: 2px solid #992222;
    padding: clamp(0.85rem, 3.5vw, 2rem);
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
    max-width: 700px;
    width: 100%;
    margin: 1.5rem auto;
  }
  .nsk-moves-widget .nsk-title {
    color: #992222;
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: clamp(1.1rem, 4vw, 1.5rem);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .nsk-moves-widget .nsk-table-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 1rem 0;
  }
  .nsk-moves-widget .nsk-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    table-layout: fixed;
    font-size: clamp(0.75rem, 2.5vw, 1rem);
    margin: 0;
  }
  .nsk-moves-widget .nsk-table th,
  .nsk-moves-widget .nsk-table td {
    border: 1px solid #333;
    padding: clamp(0.3rem, 1.5vw, 0.6rem) clamp(0.2rem, 1vw, 0.8rem);
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  .nsk-moves-widget .nsk-table thead th {
    background-color: #992222;
    color: #fff;
    font-weight: bold;
  }
  .nsk-moves-widget .nsk-table tbody th {
    background-color: #e9e4d8;
    color: #222;
    text-align: left;
    font-weight: bold;
    padding-left: clamp(0.35rem, 1.5vw, 0.8rem);
  }
  .nsk-moves-widget .nsk-adv {
    font-weight: bold;
    color: #1b6d2e;
    background-color: #eaf6ed;
  }
  .nsk-moves-widget .nsk-disadv {
    color: #992222;
  }
  .nsk-moves-widget .nsk-caption {
    font-size: clamp(0.8rem, 2.5vw, 0.95rem);
    line-height: 1.5;
    color: #444;
    margin-top: 0.75rem;
    margin-bottom: 0;
  }
</style>

<div class="nsk-moves-widget">
  <h2 class="nsk-title">Moves Class Chart</h2>
  <div class="nsk-table-wrapper">
    <table class="nsk-table">
      <thead>
        <tr>
          <th rowspan="2">Monster Class</th>
          <th colspan="4">Main Character's Moves Class</th>
        </tr>
        <tr>
          <th>Grease</th>
          <th>Flame</th>
          <th>Soap</th>
          <th>None</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Grease</th>
          <td class="nsk-disadv">25%</td>
          <td class="nsk-disadv">50%</td>
          <td class="nsk-adv">150%</td>
          <td>100%</td>
        </tr>
        <tr>
          <th>Flame</th>
          <td class="nsk-adv">150%</td>
          <td class="nsk-disadv">25%</td>
          <td class="nsk-disadv">50%</td>
          <td>100%</td>
        </tr>
        <tr>
          <th>Soap</th>
          <td class="nsk-disadv">50%</td>
          <td class="nsk-adv">150%</td>
          <td class="nsk-disadv">25%</td>
          <td>100%</td>
        </tr>
        <tr>
          <th>None</th>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="nsk-caption">
    This chart shows the relationship between Monster Classes and percent of damage from the 4 classes of Moves. If the Monster's class is "none" then there is no class of Move that has an advantage. For example: If a monster's class is Grease, then a Soap class Move would do the most damage. (Think "paper, scissors, rock")
  </p>
</div>   

    <h4>Understanding Your Status</h4>
      <ul>
        <li><strong>STR (strength)</strong> relates to attack power.</li>
        <li><strong>DEF (defense)</strong> relates to damage sustained.</li>
        <li><strong>STA (stamina)</strong> relates to HP value.</li>
        <li><strong>INT (intelligence)</strong> relates to MP value.</li>
        <li><strong>AGI (agility)</strong> relates to the ability to escape battle.</li>
        <li><strong>Mojo</strong> relates to the likelihood of a character falling prey to an enemy's attack.</li>
        <li><strong>M DEF (moves defense)</strong> relates to damage sustained from enemy moves.</li>
        <li><strong>Attack R, L</strong> - The character's strength plus the attack value of the weapon(s) wielded.</li>
        <li><strong>Juke</strong> relates to the guard (or defense) value of the character's equipment.</li>
        <li><strong>Moves GRD</strong> - Certain items may increase the guard percentage of attacks from the four classes of moves.</li>
        <li><strong>Whimsy</strong> relates to the character's experience.</li>
        <li><strong>Change</strong> = $.</li>
      </ul>
      <h4>TIPS!</h4>
      <ul>
        <li><strong>Resetting a Puzzle:</strong> To reset a puzzle with moveable objects leave the screen, and return. This gives the NSKers time to return them to their original locations.</li>
        <li><strong>Breakable Items:</strong> If an item (like a hook) disappears from your inventory that means it broke (or James lost it.)</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Office Walkthrough</summary>
    <div class="manual-section">
      <h4>A Walkthrough of the Office (for cheaters)</h4>
      <ol>
        <li>Gain entrance into the Office by prying open the door in the Nurse's room with a hook.</li>
        <li>The light switch is below the Nurse's room near the restrooms.</li>
        <li>Find a key under a desk, and unlock the Conference Room C.</li>
        <li>Climb through the ventilation ducts to enter the Manager's Office. Once inside, read the "log" and exit through the door.</li>
        <li>Then, climb back into the ducts and head upwards until you fall into a previously inaccessible area of the Office. Acquire the grease can from the table and use it to lubricate the file cabinets.</li>
        <li>Once beyond the file cabinets, locate a key under a desk and unlock Conference Room A. Inside, get the Password from a file cabinet in the corner.</li>
        <li>Push the red button to unlock the Computer Room. Enter Password in the Computer Room terminal. The Storage Room will now be unlocked.</li>
      </ol>
    </div>
  </details>

  <details>
    <summary>Back Cover</summary>
    <div class="manual-section">
      <p>Every generation has a legend...<br>
      Every legend has a hero.<br>
      Every hero has a quest.<br>
      ...And every legendary heroic quest becomes...<br>
      ...a role playing game.</p>
      <ul>
        <li>Descend into the terrifying depths of r.p.g. horror.</li>
        <li>Discover the truth behind the conspiracy.</li>
        <li>Vanquish grime.</li>
      </ul>
      <p style="text-align: center; margin-top: 15px; font-weight: bold; letter-spacing: 1px;">MOLASSES PRODUCTIONS</p>
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
