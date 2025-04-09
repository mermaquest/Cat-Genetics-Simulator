
const genotypeDescriptions = {
  'Agouti':
    "The Agouti gene determines whether a cat's coat will have banded hairs (agouti pattern) or be solid in color. Dominant (A) leads to tabby patterns, while recessive (a) leads to a solid color. Select AA for homozygous dominant, Aa for heterozygous, or aa for homozygous recessive.",
  'White Spotting':
    'The White Spotting gene causes some cats to have white patches or areas, typically on the chest, paws, belly, and face. This gene is responsible for the bicolor or tuxedo pattern. Select SS for homozygous dominant (high white), Ss for heterozygous (medium white), or ss for homozygous recessive (no white).',
  'Silver':
    "The Silver gene creates a shimmering effect by making the tips of the fur white or silver. Dominant (I) results in a silver coat, while recessive (i) leads to a non-silver coat. Select II for homozygous dominant, Ii for heterozygous, or ii for homozygous recessive.",
  'Eumelanin':
    "The Eumelanin gene determines the base coat color, with three possible alleles: Black (B), Brown (b), and Cinnamon (c). Dominant (B) results in black, while recessive (b) leads to brown, and recessive (c) leads to cinnamon. Select BB for homozygous black, Bb or Bc for heterozygous black, bb for homozygous brown, bc for heterozygous brown, or cc for homozygous cinnamon.",
  'Red':
    "The Red (Orange) gene is X-linked, meaning that males inherit only one X chromosome and can either be red or not. For males, select XOY for red or XBY for non-red. For females, select XOXO for red, XOXB for tortoiseshell, or XBXB for non-red.",
  'Dilution':
    "The Dilution gene lightens the base color of the cat's coat. Dominant (D) results in the full color, while recessive (d) leads to a diluted color like blue-gray. Select DD for homozygous dominant, Dd for heterozygous, or dd for homozygous recessive (diluted).",
  'Maltese Dilution':
    "The Maltese Dilution gene further lightens diluted colors, resulting in a caramel or paler appearance. Select DD for homozygous dominant (standard dilution), Dd for heterozygous, or dd for homozygous recessive (caramelized).",
  'Siamese':
    "The Siamese gene determines color pattern, making extremities (ears, tail, paws) darker than the body. This gene is temperature-sensitive. Select SS for homozygous non-Siamese, Ss for heterozygous, or ss for homozygous Siamese (point coloration).",
  'Curly Coat (Rex Gene)':
    "The Curly Coat (Rex) gene causes a cat's fur to be curly. The rex gene is recessive, so a cat must inherit two copies to show a curly coat. Select rr for curly coat, Rr for carrier (straight coat), or RR for non-carrier (straight coat).",
  'Hairless Cats (Sphynx or Don Sphynx)':
    'The Hairless Cats gene causes hairlessness in cats like the Sphynx. Select SS or Ss for hairless (dominant in Don Sphynx), or ss for coated (or hairless in Sphynx, which is recessive).',
  'Taillessness (Manx Gene)':
    'The Manx gene causes taillessness or short tails. This gene is dominant (M). Select Mm for Manx (heterozygous), or mm for normal tail. Note: MM is usually lethal in utero.',
  'Hypertrophic Cardiomyopathy (HCM)':
    'The Hypertrophic Cardiomyopathy (HCM) gene is associated with thickening of the heart muscle. Select HH for homozygous affected, Hh for heterozygous affected, or hh for unaffected.',
  'Polycystic Kidney Disease (PKD)':
    'Polycystic Kidney Disease (PKD) causes fluid-filled cysts in the kidneys. Select KK for homozygous affected, Kk for heterozygous affected, or kk for unaffected.',
  'Brachycephalic Gene':
    'The Brachycephalic gene is associated with a shortened skull, leading to breathing difficulties. Select BB for homozygous brachycephalic, Bb for heterozygous brachycephalic, or bb for normal head shape.',
  'Progressive Retinal Atrophy (PRA)':
    'Progressive Retinal Atrophy (PRA) is a hereditary condition leading to blindness. Select PP for homozygous carrier, Pp for heterozygous carrier, or pp for affected (recessive condition).',
  'Polydactyly':
    'Polydactyly is a condition where a cat has extra toes. Select PP for homozygous polydactyl, Pp for heterozygous polydactyl, or pp for normal toe count.',
};
const traitDescriptions = {
  'Agouti':
    "The Agouti gene determines whether a cat has tabby pattern or solid color. Selecting 'tabby' means your cat has the agouti gene (A), which allows banded fur and tabby patterning. Selecting 'solid' means your cat lacks the agouti gene (a) and has a solid-colored coat without banding.",
  'White Spotting':
    "The White Spotting gene causes white patches on the coat. Selecting 'high to medium white spots' indicates strong expression of this gene (likely SS). 'Medium to low white spots' suggests moderate expression (likely Ss). 'No white spots' means your cat doesn't express this gene (ss).",
  'Silver':
    "The Silver gene creates a silver sheen by inhibiting pigment at the hair base. Selecting 'silver' means your cat shows this distinctive silvering effect (carries I allele). Selecting 'non-silver' means your cat has normal pigmentation throughout the hair shaft (ii).",
  'Eumelanin':
    "The Eumelanin gene determines base coat color. Selecting 'black' means your cat has the dominant black pigment (B). 'Brown' indicates your cat has the brown mutation (b) but not cinnamon. 'Cinnamon' means your cat has the recessive cinnamon mutation (c). 'Red' means your cat's base color is masked by the red gene.",
  'Red':
    "The Red gene determines if orange/red pigment replaces dark pigment. For males, select 'red' if your cat is orange/ginger or 'eumelanin controlled' if not red. For females, select 'red' for an all-red cat, 'tortoiseshell' for a mix of red and non-red patches, or 'eumelanin controlled' for no red coloring.",
  'Dilution':
    "The Dilution gene lightens coat colors. Selecting 'diluted' means your cat shows lighter versions of colors (blue instead of black, lilac instead of brown, fawn instead of cinnamon). Selecting 'full color' means your cat shows intense, undiluted colors.",
  'Maltese Dilution':
    "The Maltese Dilution gene further modifies diluted colors. Selecting 'caramel' means your cat has a distinctive caramelized tone to diluted colors. Selecting 'diluted' means standard dilution without caramelization.",
  'Siamese':
    "The Siamese gene creates darker color on body extremities (points). Selecting 'siamese' means your cat has darker ears, face, paws and tail with a lighter body (temperature-sensitive coloring). Selecting 'non-siamese' means even coloration across the body.",
  'Curly Coat (Rex Gene)':
    "The Curly Coat (Rex) gene affects fur texture. Selecting 'curly' means your cat has wavy or curly fur, indicating it has two copies of the recessive rex gene (rr). Selecting 'straight' means normal straight fur.",
  'Hairless Cats (Sphynx or Don Sphynx)':
    "The Hairless gene affects skin and fur development. Selecting 'hairless' means your cat has little to no fur (naked appearance). Selecting 'coated' means normal fur development.",
  'Taillessness (Manx Gene)':
    "The Manx gene affects tail development. Selecting 'tailless' means your cat has no tail or a shortened tail (Manx trait). Selecting 'tail' means your cat has a normal-length tail.",
  'Hypertrophic Cardiomyopathy (HCM)':
    "HCM is a heart condition that causes thickening of the heart muscle. Selecting 'affected' means your cat has been diagnosed with or shows signs of HCM. Selecting 'not affected' means no diagnosis or symptoms of HCM.",
  'Polycystic Kidney Disease (PKD)':
    "PKD causes fluid-filled cysts to develop in the kidneys. Selecting 'affected' means your cat has been diagnosed with or shows signs of PKD. Selecting 'not affected' means no diagnosis or symptoms of PKD.",
  'Brachycephalic Gene':
    "The Brachycephalic gene causes a shortened, flattened face. Selecting 'brachycephalic' means your cat has a flat face like a Persian. Selecting 'normal head' means your cat has a typical cat face shape with normal muzzle length.",
  'Progressive Retinal Atrophy (PRA)':
    "PRA is a degenerative eye condition leading to blindness. Selecting 'affected' means your cat has been diagnosed with or shows signs of vision loss due to PRA. Selecting 'not affected' means no diagnosis or symptoms of PRA.",
  'Polydactyly':
    "Polydactyly is the presence of extra toes. Selecting 'extra toes' means your cat has more than the usual number of toes (typically more than 5 on front paws or 4 on back paws). Selecting 'normal toes' means your cat has the standard number of toes.",
};
  
  const breedGenes = {
    'Abyssinian': ['PRA'],
    'Balinese': ['PRA'],
    'Colorpoint Shorthair': ['PRA'],
    'Exotic': ['Brachycephalic'],
    'Maine Coon': ['HCM', 'Polydactyly'],
    'Norwegian Forest Cat': ['HCM'],
    'Oriental': ['PRA'],
    'Persian': ['PKD', 'Brachycephalic', 'PRA'],
    'RagaMuffin': ['HCM'],
    'Ragdoll': ['HCM'],
    'Siamese': ['PRA'],
    'Siberian': ['HCM'],
    'None': [],
  };
  
  const coatColorGenes = [
    'Agouti',
    'White Spotting',
    'Silver',
    'Eumelanin',
    'Red',
    'Dilution',
    'Maltese Dilution',
    'Siamese',
  ];
  const healthGenes = [
    'Curly Coat (Rex Gene)',
    'Hairless Cats (Sphynx or Don Sphynx)',
    'Taillessness (Manx Gene)',
    'Hypertrophic Cardiomyopathy (HCM)',
    'Polycystic Kidney Disease (PKD)',
    'Brachycephalic Gene',
    'Progressive Retinal Atrophy (PRA)',
    'Polydactyly',
  ];
  const traitOptions = {
    'Agouti': [
      'tabby: Banded hairs with pattern (AA or Aa)',
      'solid: Solid color without banding (aa)'
    ],
    'White Spotting': [
      'high to medium white spots: Significant white areas (SS)',
      'medium to low white spots: Limited white patches (Ss)',
      'no white spots: Solid colored coat (ss)'
    ],
    'Silver': [
      'silver: Silver/white hair tips (II or Ii)',
      'non-silver: Normal pigmented coat (ii)'
    ],
    'Eumelanin': [
      'black: Black base color (BB, Bb, Bc)',
      'brown: Chocolate/brown base color (bb, bc)',
      'cinnamon: Warm brown/cinnamon color (cc)',
      'red: Red pigment masking base color'
    ],
    'Red': [
      'red: Orange/ginger color (XOY male or XOXO female)',
      'tortoiseshell: Mix of red and base color (XOXB female only)',
      'eumelanin controlled: Base color determined by Eumelanin gene (XBY male or XBXB female)'
    ],
    'Dilution': [
      'diluted: Lighter version of base color (dd)',
      'full color: Rich, intense color (DD or Dd)'
    ],
    'Maltese Dilution': [
      'caramel: Warm caramelized tones (dd)',
      'diluted: Standard diluted color (DD or Dd)'
    ],
    'Siamese': [
      'siamese: Darker points on extremities (ss)',
      'non-siamese: Even coloration (SS or Ss)'
    ],
    'Curly Coat (Rex Gene)': [
      'curly: Wavy or curly fur (rr)',
      'straight: Normal straight coat (RR or Rr)'
    ],
    'Hairless Cats (Sphynx or Don Sphynx)': [
      'hairless: Little or no fur (SS, Ss, or ss for Sphynx)',
      'coated: Normal fur development (ss for Don Sphynx)'
    ],
    'Taillessness (Manx Gene)': [
      'tailless: No tail or shortened tail (Mm)',
      'tail: Normal-length tail (mm)'
    ],
    'Hypertrophic Cardiomyopathy (HCM)': [
      'affected: At risk for heart condition (HH or Hh)',
      'not affected: Low risk for heart condition (hh)'
    ],
    'Polycystic Kidney Disease (PKD)': [
      'affected: At risk for kidney condition (KK or Kk)',
      'not affected: Low risk for kidney condition (kk)'
    ],
    'Brachycephalic Gene': [
      'brachycephalic: Flat face, shortened muzzle (BB or Bb)',
      'normal head: Regular feline face shape (bb)'
    ],
    'Progressive Retinal Atrophy (PRA)': [
      'affected: At risk for vision loss (pp)',
      'not affected: Normal vision (PP or Pp)'
    ],
    'Polydactyly': [
      'extra toes: More than standard number (PP or Pp)',
      'normal toes: Standard number of toes (pp)'
    ],
  };
  
  const genotypeOptions = {
    'Agouti': [
      'AA: Tabby pattern (homozygous dominant)',
      'Aa: Tabby pattern (heterozygous)',
      'aa: Solid color (homozygous recessive)'
    ],
    'White Spotting': [
      'SS: High white spotting',
      'Ss: Medium white spotting',
      'ss: No white spotting'
    ],
    'Silver': [
      'II: Silver coat (homozygous dominant)',
      'Ii: Silver coat (heterozygous)',
      'ii: Non-silver coat (homozygous recessive)'
    ],
    'Eumelanin': [
      'BB: Black coat (homozygous black)',
      'Bb: Black coat (heterozygous black/brown)',
      'Bc: Black coat (heterozygous black/cinnamon)',
      'bb: Chocolate coat (homozygous brown)',
      'bc: Chocolate coat (heterozygous brown/cinnamon)',
      'cc: Cinnamon coat (homozygous cinnamon)'
    ],
    'Red Male': [
      'XOY: Red (orange) coat',
      'XBY: Non-red coat (base color)'
    ],
    'Red Female': [
      'XOXO: Red (orange) coat',
      'XOXB: Tortoiseshell pattern',
      'XBXB: Non-red coat (base color)'
    ],
    'Dilution': [
      'DD: Full color (homozygous dominant)',
      'Dd: Full color (heterozygous)',
      'dd: Diluted color (blue, lilac, fawn)'
    ],
    'Maltese Dilution': [
      'DD: Standard diluted color',
      'Dd: Standard diluted color',
      'dd: Caramelized color'
    ],
    'Siamese': [
      'SS: Non-pointed coat (homozygous dominant)',
      'Ss: Non-pointed coat (heterozygous)',
      'ss: Siamese pattern (point coloration)'
    ],
    'Curly Coat (Rex Gene)': [
      'rr: Curly coat',
      'Rr: Straight coat (carrier)',
      'RR: Straight coat (non-carrier)'
    ],
    'Hairless Cats (Sphynx or Don Sphynx)': [
      'SS: Hairless (Don Sphynx)',
      'Ss: Hairless (Don Sphynx)',
      'ss: Coated (or hairless for Sphynx)'
    ],
    'Taillessness (Manx Gene)': [
      'MM: Lethal in utero',
      'Mm: Tailless or short tail',
      'mm: Normal tail'
    ],
    'Hypertrophic Cardiomyopathy (HCM)': [
      'HH: Affected (higher risk)',
      'Hh: Affected (carrier)',
      'hh: Not affected'
    ],
    'Polycystic Kidney Disease (PKD)': [
      'KK: Affected (higher risk)',
      'Kk: Affected (carrier)',
      'kk: Not affected'
    ],
    'Brachycephalic Gene': [
      'BB: Flat-faced (homozygous)',
      'Bb: Flat-faced (heterozygous)',
      'bb: Normal face shape'
    ],
    'Progressive Retinal Atrophy (PRA)': [
      'PP: Normal vision (homozygous)',
      'Pp: Normal vision (carrier)',
      'pp: Affected (vision loss)'
    ],
    'Polydactyly': [
      'PP: Extra toes (homozygous)',
      'Pp: Extra toes (heterozygous)',
      'pp: Normal toes'
    ],
  };
  
  const simulationData = {
    selectedBreed: 'None',
    knowGenotypes: false,
    maleGenotypes: {},
    femaleGenotypes: {},
    malteseDilutionVisible: {
      male: false,
      female: false,
    },
  };
  
  function navigateToSection(currentSectionId, nextSectionId) {
    // Hide current section
    document.getElementById(currentSectionId).classList.remove('active');
    // Show next section
    document.getElementById(nextSectionId).classList.add('active');
    // Scroll to top
    window.scrollTo(0, 0);
  }
  

  document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('intro-section').classList.add('active');
  

    initializeForms();
  

    setupEventListeners();
  });
  
  function setupInfoPopovers() {
    const popoverContainer = document.getElementById('popover-container');
    let activePopover = null;
    let activeInfoIcon = null;
  

    document.addEventListener('click', function (event) {
      const target = event.target;
  
      if (target.classList.contains('info-icon')) {
        event.preventDefault();
  
        const geneName = target.dataset.gene;
        const description = descriptions[geneName];

        activeInfoIcon = target;
  
        popoverContainer.innerHTML = `
                  <div class="popover-arrow"></div>
                  <h4>${geneName}</h4>
                  <p>${description}</p>
              `;
  
        // Position popover and arrow
        const rect = target.getBoundingClientRect();
        positionPopover(popoverContainer, rect);
  
        // Show the popover
        popoverContainer.classList.add('active');
        activePopover = popoverContainer;
      }
      // If clicking outside of popover, hide it
      else if (activePopover && !activePopover.contains(target)) {
        closePopover();
      }
    });
  
    // Close popover when pressing ESC
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && activePopover) {
        closePopover();
      }
    });
  
    // Handle window resize
    window.addEventListener('resize', function () {
      if (activePopover) {
        closePopover();
      }
    });
  
    // Handle scrolling - reposition the popover when scrolling
    window.addEventListener(
      'scroll',
      function () {
        if (activePopover && activeInfoIcon) {
          const rect = activeInfoIcon.getBoundingClientRect();
          positionPopover(popoverContainer, rect);
        }
      },
      { passive: true }
    );
  
    // Function to close the popover
    function closePopover() {
      activePopover.classList.remove('active');
      activePopover = null;
      activeInfoIcon = null;
    }
  }
  
  // Position the popover relative to the info icon
  function positionPopover(popover, targetRect) {
    const arrow = popover.querySelector('.popover-arrow');
  
    // Default position (below and centered)
    let top = targetRect.bottom + 10;
    let left = targetRect.left + targetRect.width / 2 - 150; // Center the 300px wide popover
  
    // Ensure popover stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
  
    // Adjust horizontal position if needed
    if (left < 10) left = 10;
    if (left + 300 > viewportWidth - 10) left = viewportWidth - 310;
  
    // Check if popover would go off bottom of screen
    if (top + 200 > viewportHeight) {
      // Assuming max height of 200px
      // Position above the target instead
      top = targetRect.top - 10;
      arrow.style.bottom = '-6px';
      arrow.style.top = 'auto';
    } else {
      arrow.style.top = '-6px';
      arrow.style.bottom = 'auto';
    }
  
    // Position arrow horizontally
    const arrowLeft = targetRect.left - left + targetRect.width / 2 - 6; // 6px is half of arrow width
    arrow.style.left = `${arrowLeft}px`;
  
    // Set popover position
    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
  }
  
  // Initialize the form fields
  function initializeForms() {
    // Initialize trait forms
    populateTraitForm('male-traits-form', coatColorGenes);
    populateTraitForm('female-traits-form', coatColorGenes);
    populateTraitForm('male-traits-form', healthGenes);
    populateTraitForm('female-traits-form', healthGenes);
  
    // Initialize genotype forms
    populateGenotypeForm('male-genotype-form', coatColorGenes, 'male');
    populateGenotypeForm('female-genotype-form', coatColorGenes, 'female');
    populateGenotypeForm('male-genotype-form', healthGenes);
    populateGenotypeForm('female-genotype-form', healthGenes);
  
    // Setup info popovers
    setupInfoPopovers();
  
    // Initially hide Maltese Dilution fields
    toggleMalteseDilution('male', false);
    toggleMalteseDilution('female', false);
  
    // Watch for changes in Dilution trait to show/hide Maltese Dilution
    const maleDilutionSelect = document.getElementById('male-trait-dilution');
    const femaleDilutionSelect = document.getElementById('female-trait-dilution');
  
    if (maleDilutionSelect) {
      maleDilutionSelect.addEventListener('change', function () {
        toggleMalteseDilution('male', this.value === 'diluted');
      });
    }
  
    if (femaleDilutionSelect) {
      femaleDilutionSelect.addEventListener('change', function () {
        toggleMalteseDilution('female', this.value === 'diluted');
      });
    }
  }
  
  // Function to create valid CSS selector from gene name
  function createValidSelector(geneName) {
    // Replace spaces, parentheses, and other special characters with hyphens
    // and convert to lowercase for consistent IDs
    return geneName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '') // Remove parentheses entirely
      .replace(/\//g, '-'); // Replace slashes with hyphens
  }
  
  // Create trait select fields
  function populateTraitForm(formId, geneList) {
    const form = document.getElementById(formId);
    if (!form) return;
  
    geneList.forEach((gene) => {
      const geneId = createValidSelector(gene);
      
      // Extract just the trait name for the value, but show the full text
      const options = traitOptions[gene].map((option) => {
        const parts = option.split(':');
        const value = parts[0].trim(); // Use just the trait name as the value
        return `<option value="${value}">${option}</option>`;
      }).join('');
  
      const groupId = `${formId}-group-${geneId}`;
  
      const html = `
              <div class="form-group" id="${groupId}">
                  <label for="${formId.split('-')[0]}-trait-${geneId}">
                      <span>${gene}</span>
                      <span class="info-icon" data-gene="${gene}">i</span>
                  </label>
                  <select class="form-control trait-select" id="${
                    formId.split('-')[0]
                  }-trait-${geneId}" data-gene="${gene}">
                      ${options}
                  </select>
              </div>
          `;
  
      form.insertAdjacentHTML('beforeend', html);
    });
  }
  
  // Create genotype select fields
  function populateGenotypeForm(formId, geneList, gender = '') {
  const form = document.getElementById(formId);
  if (!form) return;

  geneList.forEach((gene) => {
    const geneId = createValidSelector(gene);

    // Special handling for Red gene which has different options for males and females
    let optionsArray;
    if (gene === 'Red' && gender) {
      optionsArray = genotypeOptions[`Red ${gender.charAt(0).toUpperCase() + gender.slice(1)}`];
    } else {
      optionsArray = genotypeOptions[gene] || [];
    }

    // Extract just the genotype code for the value, but show the full text
    const options = optionsArray.map((option) => {
      const parts = option.split(':');
      const value = parts[0].trim(); // Use just the genotype code as the value
      return `<option value="${value}">${option}</option>`;
    }).join('');

    const groupId = `${formId}-group-${geneId}`;

    const html = `
            <div class="form-group" id="${groupId}">
                <label for="${formId.split('-')[0]}-genotype-${geneId}">
                    <span>${gene}</span>
                    <span class="info-icon" data-gene="${gene}">i</span>
                </label>
                <select class="form-control genotype-select" id="${
                  formId.split('-')[0]
                }-genotype-${geneId}" data-gene="${gene}">
                    ${options}
                </select>
            </div>
        `;

    form.insertAdjacentHTML('beforeend', html);
  });
}

  
  // Toggle visibility of Maltese Dilution based on Dilution trait
  function toggleMalteseDilution(gender, show) {
    const malteseDilutionId = `${gender}-traits-form-group-maltese-dilution`;
    const malteseDilutionElement = document.getElementById(malteseDilutionId);
  
    if (malteseDilutionElement) {
      malteseDilutionElement.style.display = show ? 'block' : 'none';
    }
  
    simulationData.malteseDilutionVisible[gender] = show;
  }
  
  // Setup all event listeners
  function setupEventListeners() {
    // Start simulation button
    document.getElementById('start-btn').addEventListener('click', function () {
      navigateToSection('intro-section', 'breed-section');
    });
  
    // Breed toggle
    const sameBreedToggle = document.getElementById('same-breed');
    const sameBreedText = document.getElementById('same-breed-text');
    const breedGroup = document.getElementById('breed-group');
    const breedInfoBox = document.getElementById('breed-info-box');
  
    sameBreedToggle.addEventListener('change', function () {
      sameBreedText.textContent = this.checked ? 'Yes' : 'No';
      breedGroup.style.display = this.checked ? 'block' : 'none';
  
      if (!this.checked) {
        document.getElementById('cat-breed').value = 'None';
        breedInfoBox.style.display = 'none';
        simulationData.selectedBreed = 'None';
      }
    });
  
    document.getElementById('cat-breed').addEventListener('change', function () {
      const breedName = this.value;
      simulationData.selectedBreed = breedName;
    
      // Show breed genetic info if available
      const breedInfo = document.getElementById('breed-info');
      const breedInfoBox = document.getElementById('breed-info-box');
    
      if (breedName !== 'None' && breedGenes[breedName] && breedGenes[breedName].length > 0) {
        breedInfo.innerHTML = `
          <p>The ${breedName} breed is genetically predisposed to the following conditions:</p>
          <ul class="breed-health-list">
            ${breedGenes[breedName].map((gene) => {
              // Each health gene in breedGenes refers to a longer gene name in descriptions
              // e.g., 'HCM' → 'Hypertrophic Cardiomyopathy (HCM)'
              // So we need to find the full gene name that contains this abbreviation
              let fullGeneName;
              
              // Find the corresponding full gene name in healthGenes array
              for (const longName of healthGenes) {
                if (longName.includes(gene)) {
                  fullGeneName = longName;
                  break;
                }
              }
              
              return `
                <li>
                  ${gene}
                  ${fullGeneName ? `<span class="info-icon" data-gene="${fullGeneName}">i</span>` : ''}
                </li>
              `;
            }).join('')}
          </ul>
        `;
        breedInfoBox.style.display = 'block';
      } else {
        breedInfoBox.style.display = 'none';
      }
    });
  
    // Genotype knowledge toggle
    const knowGenotypesToggle = document.getElementById('know-genotypes');
    const knowGenotypesText = document.getElementById('know-genotypes-text');
  
    knowGenotypesToggle.addEventListener('change', function () {
      knowGenotypesText.textContent = this.checked ? 'Yes' : 'No';
      simulationData.knowGenotypes = this.checked;
    });
  
    // Navigation buttons
    document.getElementById('breed-next-btn').addEventListener('click', function () {
      navigateToSection('breed-section', 'genotype-knowledge-section');
    });
  
    document.getElementById('knowledge-prev-btn').addEventListener('click', function () {
      navigateToSection('genotype-knowledge-section', 'breed-section');
    });
  
    document.getElementById('knowledge-next-btn').addEventListener('click', function () {
      if (simulationData.knowGenotypes) {
        navigateToSection('genotype-knowledge-section', 'male-genotype-section');
      } else {
        navigateToSection('genotype-knowledge-section', 'male-traits-section');
      }
    });
  
    // Trait section navigation
    document.getElementById('male-traits-prev-btn').addEventListener('click', function () {
      navigateToSection('male-traits-section', 'genotype-knowledge-section');
    });
  
    document.getElementById('male-traits-next-btn').addEventListener('click', function () {
      // Collect male trait data
      simulationData.maleGenotypes = getVisualTraitsGenotypes('male');
      navigateToSection('male-traits-section', 'female-traits-section');
    });
  
    document.getElementById('female-traits-prev-btn').addEventListener('click', function () {
      navigateToSection('female-traits-section', 'male-traits-section');
    });
  
    document.getElementById('female-traits-next-btn').addEventListener('click', function () {
      // Collect female trait data
      simulationData.femaleGenotypes = getVisualTraitsGenotypes('female');
  
      // Calculate and display results
      calculateResults();
      navigateToSection('female-traits-section', 'results-section');
    });
  
    // Genotype section navigation
    document.getElementById('male-genotype-prev-btn').addEventListener('click', function () {
      navigateToSection('male-genotype-section', 'genotype-knowledge-section');
    });
  
    document.getElementById('male-genotype-next-btn').addEventListener('click', function () {
      // Collect male genotype data
      simulationData.maleGenotypes = getDirectGenotypes('male');
      navigateToSection('male-genotype-section', 'female-genotype-section');
    });
  
    document.getElementById('female-genotype-prev-btn').addEventListener('click', function () {
      navigateToSection('female-genotype-section', 'male-genotype-section');
    });
  
    document.getElementById('female-genotype-next-btn').addEventListener('click', function () {
      // Collect female genotype data
      simulationData.femaleGenotypes = getDirectGenotypes('female');
  
      // Calculate and display results
      calculateResults();
      navigateToSection('female-genotype-section', 'results-section');
    });
  
    // Results section navigation
    document.getElementById('results-prev-btn').addEventListener('click', function () {
      if (simulationData.knowGenotypes) {
        navigateToSection('results-section', 'female-genotype-section');
      } else {
        navigateToSection('results-section', 'female-traits-section');
      }
    });
  
    document.getElementById('restart-btn').addEventListener('click', function () {
      // Reset all data and go back to start
      resetSimulation();
      navigateToSection('results-section', 'intro-section');
    });
  
    // Tab navigation
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach((p) => p.classList.remove('active'));
  
        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        document.getElementById(this.dataset.tab).classList.add('active');
      });
    });
  }
  
  // Get genotypes from visual traits
  function getVisualTraitsGenotypes(gender) {
    const genotypes = {};
  
    // Process all coat color genes
    coatColorGenes.forEach((gene) => {
      const geneId = createValidSelector(gene);
      const traitSelector = `#${gender}-trait-${geneId}`;
      const traitElement = document.querySelector(traitSelector);
  
      if (traitElement) {
        const trait = traitElement.value;
        genotypes[gene] = inferGenotypeFromVisualTrait(gene, trait, gender);
      }
    });
  
    // Process all health genes
    healthGenes.forEach((gene) => {
      const geneId = createValidSelector(gene);
      const traitSelector = `#${gender}-trait-${geneId}`;
      const traitElement = document.querySelector(traitSelector);
  
      if (traitElement) {
        const trait = traitElement.value;
        genotypes[gene] = inferGenotypeFromVisualTrait(gene, trait, gender);
      }
    });
  
    return genotypes;
  }
  // Function to get visual trait descriptions for genotypes
function getVisualTraitDescription(gene, genotype) {
  switch(gene) {
    case 'Agouti':
      if (genotype === 'AA' || genotype === 'Aa') {
        return "This makes the cat have a tabby pattern where each hair has bands of color, allowing for distinctive tabby markings.";
      } else if (genotype === 'aa') {
        return "This makes the cat have a solid color without tabby patterning, as the hairs will be uniformly colored.";
      }
      break;
      
    case 'White Spotting':
      if (genotype === 'SS') {
        return "This makes the cat have high white spotting, likely covering most of the body with white, possibly leaving colored areas only on the head and tail.";
      } else if (genotype === 'Ss') {
        return "This makes the cat have low to medium white spotting, likely in a tuxedo pattern or partially covering the body.";
      } else if (genotype === 'ss') {
        return "This means the cat has no white spotting at all, showing only the base colors and any other markings.";
      }
      break;
      
    case 'Silver':
      if (genotype === 'II' || genotype === 'Ii') {
        return "This gives the cat a silver sheen to the coat because the base of each hair is depigmented, creating a distinctive silvery appearance.";
      } else if (genotype === 'ii') {
        return "This means the cat does not have the silver effect, showing the full natural color without silvering.";
      }
      break;
      
    case 'Eumelanin':
      if (genotype === 'BB' || genotype === 'Bb' || genotype === 'Bc') {
        return "This makes the cat's base color black, which appears as pure black in non-diluted cats.";
      } else if (genotype === 'bb' || genotype === 'bc') {
        return "This makes the cat's base color chocolate/brown, which is a lighter warm brown.";
      } else if (genotype === 'cc') {
        return "This makes the cat's base color cinnamon, which is a warm reddish-brown that is lighter than chocolate.";
      }
      break;
      
    case 'Red':
      if (genotype === 'XOY') {
        return "This makes a male cat have a red/orange coat, overriding the eumelanin color genes.";
      } else if (genotype === 'XBY') {
        return "This means a male cat will show its eumelanin-based color (black, chocolate, or cinnamon) rather than red.";
      } else if (genotype === 'XOXO') {
        return "This makes a female cat have a red/orange coat, overriding the eumelanin color genes.";
      } else if (genotype === 'XOXB') {
        return "This creates the tortoiseshell pattern in female cats with patches of red and eumelanin-based color.";
      } else if (genotype === 'XBXB') {
        return "This means a female cat will show its eumelanin-based color (black, chocolate, or cinnamon) rather than red.";
      }
      break;
      
    case 'Dilution':
      if (genotype === 'DD' || genotype === 'Dd') {
        return "This maintains the full intensity of the coat color, resulting in deep, rich colors.";
      } else if (genotype === 'dd') {
        return "This dilutes all coat colors: black becomes blue-gray, chocolate becomes lilac, cinnamon becomes fawn, and red becomes cream.";
      }
      break;
      
    case 'Maltese Dilution':
      if (genotype === 'DD' || genotype === 'Dd') {
        return "This maintains the standard diluted colors without additional modification.";
      } else if (genotype === 'dd') {
        return "This further modifies already diluted colors, giving them a caramelized tone that appears slightly warmer and more brownish.";
      }
      break;
      
    case 'Siamese':
      if (genotype === 'SS' || genotype === 'Ss') {
        return "This gives the cat even coloration throughout the body without temperature-sensitive color variation.";
      } else if (genotype === 'ss') {
        return "This creates the famous Siamese 'pointed' pattern with darker color on the cooler parts of the body (face, ears, paws, tail) and lighter color on the warmer body core.";
      }
      break;
      
    case 'Curly Coat (Rex Gene)':
      if (genotype === 'RR' || genotype === 'Rr') {
        return "This gives the cat a normal straight coat with standard texture.";
      } else if (genotype === 'rr') {
        return "This gives the cat curly or wavy fur with a distinctive rex appearance, often shorter and with altered whiskers.";
      }
      break;
      
    case 'Hairless Cats (Sphynx or Don Sphynx)':
      if (genotype === 'SS' || genotype === 'Ss') {
        return "This makes the cat hairless or nearly hairless, with just peach fuzz or sparse hair on extremities.";
      } else if (genotype === 'ss') {
        return "This gives the cat a normal coat with full fur development.";
      }
      break;
      
    case 'Taillessness (Manx Gene)':
      if (genotype === 'MM') {
        return "This combination is usually lethal, causing embryonic death.";
      } else if (genotype === 'Mm') {
        return "This causes the cat to have no tail or a shortened tail (rumpy, rumpy-riser, or stumpy) depending on expression.";
      } else if (genotype === 'mm') {
        return "This gives the cat a normal full-length tail.";
      }
      break;
      
    case 'Hypertrophic Cardiomyopathy (HCM)':
      if (genotype === 'HH' || genotype === 'Hh') {
        return "This increases the cat's risk of developing HCM, a condition where the heart muscle thickens and may affect heart function.";
      } else if (genotype === 'hh') {
        return "This indicates a lower genetic risk for HCM, though other genetic and environmental factors may still play a role.";
      }
      break;
      
    case 'Polycystic Kidney Disease (PKD)':
      if (genotype === 'KK' || genotype === 'Kk') {
        return "This increases the cat's risk of developing PKD, where fluid-filled cysts form in the kidneys, potentially leading to kidney dysfunction.";
      } else if (genotype === 'kk') {
        return "This indicates that the cat does not carry the known genetic mutation for PKD.";
      }
      break;
      
    case 'Brachycephalic Gene':
      if (genotype === 'BB' || genotype === 'Bb') {
        return "This gives the cat a flattened face with shortened nasal passages, characteristic of breeds like Persians.";
      } else if (genotype === 'bb') {
        return "This gives the cat a normal face shape with a standard-length muzzle.";
      }
      break;
      
    case 'Progressive Retinal Atrophy (PRA)':
      if (genotype === 'PP' || genotype === 'Pp') {
        return "This means the cat is either free from PRA (PP) or a carrier (Pp) without developing the condition.";
      } else if (genotype === 'pp') {
        return "This means the cat is at high risk for developing PRA, a degenerative eye disease that can lead to blindness.";
      }
      break;
      
    case 'Polydactyly':
      if (genotype === 'PP' || genotype === 'Pp') {
        return "This gives the cat extra toes, usually on the front paws, sometimes on all four paws.";
      } else if (genotype === 'pp') {
        return "This gives the cat the normal number of toes (5 on front paws, 4 on back paws).";
      }
      break;
      
    default:
      return "";
  }
}
  // Get genotypes directly from user input
  function getDirectGenotypes(gender) {
    const genotypes = {};
  
    // Process all coat color genes
    coatColorGenes.forEach((gene) => {
      const geneId = createValidSelector(gene);
      const genotypeSelector = `#${gender}-genotype-${geneId}`;
      const genotypeElement = document.querySelector(genotypeSelector);
  
      if (genotypeElement) {
        genotypes[gene] = genotypeElement.value;
      }
    });
  
    // Process all health genes
    healthGenes.forEach((gene) => {
      const geneId = createValidSelector(gene);
      const genotypeSelector = `#${gender}-genotype-${geneId}`;
      const genotypeElement = document.querySelector(genotypeSelector);
  
      if (genotypeElement) {
        genotypes[gene] = genotypeElement.value;
      }
    });
  
    return genotypes;
  }
  
  // Infer genotype from visual trait
  function inferGenotypeFromVisualTrait(geneName, trait, gender) {
    // Helper function to randomly choose from array
    function randomChoice(options) {
      return options[Math.floor(Math.random() * options.length)];
    }
  
    // Handle case where trait is null or undefined
    if (trait === null || trait === undefined) {
      console.warn(`No trait provided for ${geneName}. Using default value.`);
      return null; // Return null for missing traits
    }
  
    switch (geneName) {
      case 'Agouti':
        if (trait === 'tabby') {
          return randomChoice(['AA', 'Aa']); // 50% chance for AA or Aa
        } else if (trait === 'solid') {
          return 'aa'; // Solid implies homozygous recessive
        } else {
          console.error(`Error: Invalid visual trait entered for Agouti gene. Provided input: ${trait}`);
          return null; // Skip this gene, continue with other traits
        }
  
      case 'White Spotting':
        if (trait === 'high to medium white spots') {
          return 'SS'; // Homozygous dominant (SS)
        } else if (trait === 'medium to low white spots') {
          return 'Ss'; // Heterozygous dominant (Ss)
        } else if (trait === 'no white spots') {
          return 'ss'; // No white spots, solid color (ss)
        } else {
          console.error(`Error: Invalid visual trait entered for White Spotting gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Silver':
        if (trait === 'silver') {
          return randomChoice(['II', 'Ii']); // 50% chance for II or Ii
        } else if (trait === 'non-silver') {
          return 'ii'; // Non-silver implies homozygous recessive
        } else {
          console.error(`Error: Invalid visual trait entered for Silver gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Eumelanin':
        if (trait === 'black') {
          return randomChoice(['BB', 'Bb', 'Bc']); // Can be BB, Bb, or Bc (heterozygous black)
        } else if (trait === 'brown') {
          return randomChoice(['bb', 'bc']); // Can be bb or bc (heterozygous brown)
        } else if (trait === 'cinnamon') {
          return 'cc'; // Cinnamon implies homozygous recessive (cc)
        } else if (trait === 'red') {
          // Red phenotype masks the base color, so could be any Eumelanin genotype
          return randomChoice(['BB', 'Bb', 'Bc', 'bb', 'bc', 'cc']);
        } else {
          console.error(`Error: Invalid visual trait entered for Eumelanin gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Red':
        if (trait === 'red' && gender === 'male') {
          return 'XOY'; // Males: XOY (Red)
        } else if (trait === 'red' && gender === 'female') {
          return 'XOXO'; // Females: XOXO (Red)
        } else if (trait === 'tortoiseshell' && gender === 'female') {
          return 'XOXB'; // Females with tortoiseshell pattern
        } else if (trait === 'eumelanin controlled' && gender === 'male') {
          return 'XBY'; // Non-red male
        } else if (trait === 'eumelanin controlled' && gender === 'female') {
          return 'XBXB'; // Non-red female
        } else {
          console.error(`Error: Invalid visual trait entered for Red gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Dilution':
        if (trait === 'diluted') {
          return 'dd'; // Diluted coloration
        } else if (trait === 'full color') {
          return randomChoice(['DD', 'Dd']); // Full color
        } else {
          console.error(`Error: Invalid visual trait entered for Dilution gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Maltese Dilution':
        if (trait === 'diluted') {
          return 'Dd'; // Heterozygous (Dd) for the diluted trait
        } else if (trait === 'caramel') {
          return 'dd'; // Homozygous recessive (dd), resulting in caramelized color
        } else {
          console.error(`Error: Invalid visual trait entered for Maltese Dilution gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Siamese':
        if (trait === 'siamese') {
          return 'ss'; // Siamese pattern implies homozygous recessive
        } else if (trait === 'non-siamese') {
          return randomChoice(['SS', 'Ss']); // Non-Siamese implies either SS or Ss
        } else {
          console.error(`Error: Invalid visual trait entered for Siamese gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Curly Coat (Rex Gene)':
        if (trait === 'curly') {
          return 'rr'; // Curly coat requires recessive homozygous rr
        } else if (trait === 'straight') {
          return randomChoice(['RR', 'Rr']); // Straight coat means dominant R is present
        } else {
          console.error(`Error: Invalid visual trait entered for Curly Coat gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Hairless Cats (Sphynx or Don Sphynx)':
        if (trait === 'hairless') {
          return randomChoice(['SS', 'Ss']); // Hairless could be either dominant
        } else if (trait === 'coated') {
          return randomChoice(['Ss', 'ss']); // Coated could be heterozygous or recessive
        } else {
          console.error(`Error: Invalid visual trait entered for Hairless Cats gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Taillessness (Manx Gene)':
        if (trait === 'tailless') {
          return 'Mm'; // Heterozygous Manx cats show the trait
        } else if (trait === 'tail') {
          return 'mm'; // Normal tail implies homozygous recessive
        } else {
          console.error(`Error: Invalid visual trait entered for Taillessness gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Hypertrophic Cardiomyopathy (HCM)':
        if (trait === 'affected') {
          return 'Hh'; // Heterozygous is most common for affected cats
        } else if (trait === 'not affected') {
          return 'hh'; // Non-affected implies homozygous recessive
        } else {
          console.error(`Error: Invalid visual trait entered for HCM gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Polycystic Kidney Disease (PKD)':
        if (trait === 'affected') {
          return 'Kk'; // Heterozygous for affected cats
        } else if (trait === 'not affected') {
          return 'kk'; // Non-affected implies homozygous recessive
        } else {
          console.error(`Error: Invalid visual trait entered for PKD gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Brachycephalic Gene':
        if (trait === 'brachycephalic') {
          return 'Bb'; // Most brachycephalic cats are heterozygous
        } else if (trait === 'normal head') {
          return 'bb'; // Normal head implies homozygous recessive
        } else {
          console.error(`Error: Invalid visual trait entered for Brachycephalic gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Progressive Retinal Atrophy (PRA)':
        if (trait === 'affected') {
          return 'pp'; // Affected implies homozygous recessive
        } else if (trait === 'not affected') {
          return randomChoice(['PP', 'Pp']); // Non-affected could be either
        } else {
          console.error(`Error: Invalid visual trait entered for PRA gene. Provided input: ${trait}`);
          return null;
        }
  
      case 'Polydactyly':
        if (trait === 'extra toes') {
          return 'Pp'; // Heterozygous for affected cats
        } else if (trait === 'normal toes') {
          return 'pp'; // Normal toes implies homozygous recessive
        } else {
          console.error(`Error: Invalid visual trait entered for Polydactyly gene. Provided input: ${trait}`);
          return null;
        }
  
      default:
        console.error(`Unknown gene: ${geneName}`);
        return null;
    }
  }
  
  // Calculate Punnett square for a gene
  function punnettSquare(parent1Genotype, parent2Genotype, geneName) {
    // Special handling for Red gene
    if (geneName === 'Red') {
      return calculateRedGeneOffspring(parent1Genotype, parent2Genotype);
    }
  
    const possibleOffspring = [];
  
    // For standard autosomal genes
    const parent1Alleles = [];
    const parent2Alleles = [];
  
    // Extract individual alleles from genotypes
    for (let i = 0; i < parent1Genotype.length; i++) {
      if (/[A-Za-z]/.test(parent1Genotype[i])) {
        parent1Alleles.push(parent1Genotype[i]);
      }
    }
  
    for (let i = 0; i < parent2Genotype.length; i++) {
      if (/[A-Za-z]/.test(parent2Genotype[i])) {
        parent2Alleles.push(parent2Genotype[i]);
      }
    }
  
    // Create all possible combinations
    for (let i = 0; i < parent1Alleles.length; i += 2) {
      const allele1 = parent1Alleles[i];
      const allele2 = parent1Alleles[i + 1] || parent1Alleles[i]; // Handle cases with only one allele
  
      for (let j = 0; j < parent2Alleles.length; j += 2) {
        const allele3 = parent2Alleles[j];
        const allele4 = parent2Alleles[j + 1] || parent2Alleles[j]; // Handle cases with only one allele
  
        // Create offspring genotypes (ensure alphabetical order for consistency)
        const genotype1 = sortAlleles(allele1 + allele3);
        const genotype2 = sortAlleles(allele1 + allele4);
        const genotype3 = sortAlleles(allele2 + allele3);
        const genotype4 = sortAlleles(allele2 + allele4);
  
        possibleOffspring.push(genotype1, genotype2, genotype3, genotype4);
      }
    }
  
    return possibleOffspring;
  }
  
  // Helper function to sort alleles alphabetically (e.g., "aB" becomes "Ba")
  function sortAlleles(genotype) {
    return genotype.split('').sort().join('');
  }
  
  // Special handling for Red gene
  function calculateRedGeneOffspring(maleGenotype, femaleGenotype) {
    const maleOffspring = [];
    const femaleOffspring = [];
  
    // Male offspring (inherits Y from father, X from mother)
    if (maleGenotype.includes('Y')) {
      if (femaleGenotype.includes('XO')) {
        maleOffspring.push('XOY'); // Red male
      }
      if (femaleGenotype.includes('XB')) {
        maleOffspring.push('XBY'); // Non-red male
      }
    }
  
    // Female offspring (inherits X from both parents)
    if (femaleGenotype.includes('X')) {
      if (femaleGenotype.includes('XO')) {
        // Mother has red (XO) allele
        if (maleGenotype.includes('XO')) {
          // Father has red (XO) allele
          femaleOffspring.push('XOXO'); // Red female
        }
        if (maleGenotype.includes('XB')) {
          // Father has non-red (XB) allele
          femaleOffspring.push('XOXB'); // Tortoiseshell female
        }
      }
      if (femaleGenotype.includes('XB')) {
        // Mother has non-red (XB) allele
        if (maleGenotype.includes('XO')) {
          // Father has red (XO) allele
          femaleOffspring.push('XOXB'); // Tortoiseshell female
        }
        if (maleGenotype.includes('XB')) {
          // Father has non-red (XB) allele
          femaleOffspring.push('XBXB'); // Non-red female
        }
      }
    }
  
    // Ensure we have the right number of offspring based on Punnett square principles
    // Each possible combination should appear with the right probability
    const normalizedMaleOffspring = normalizeOffspring(maleOffspring);
    const normalizedFemaleOffspring = normalizeOffspring(femaleOffspring);
  
    return {
      maleOffspring: normalizedMaleOffspring,
      femaleOffspring: normalizedFemaleOffspring,
    };
  }
  
  // Helper function to ensure the right number of offspring based on genetic probabilities
  function normalizeOffspring(offspring) {
    // For Red gene, each offspring should appear with equal probability
    // for all possible combinations
    if (offspring.length === 0) {
      return [];
    }
  
    // In a standard Punnett square, we typically have 4 combinations
    // We'll duplicate each unique genotype to ensure proper probability representation
    const normalized = [];
    const uniqueGenotypes = [...new Set(offspring)];
  
    // Each unique genotype should appear with equal probability
    const occurrencesPerGenotype = 4 / uniqueGenotypes.length;
  
    uniqueGenotypes.forEach((genotype) => {
      for (let i = 0; i < occurrencesPerGenotype; i++) {
        normalized.push(genotype);
      }
    });
  
    return normalized;
  }
  
  // Calculate probabilities from possible genotypes
  function calculateProbabilities(genotypes) {
    const counts = {};
    const total = genotypes.length;
  
    // Count occurrences of each genotype
    genotypes.forEach((genotype) => {
      counts[genotype] = (counts[genotype] || 0) + 1;
    });
  
    // Calculate percentages
    const probabilities = {};
    for (const genotype in counts) {
      probabilities[genotype] = (counts[genotype] / total) * 100;
    }
  
    return probabilities;
  }
  
  // Apply breed-specific genetic mutations
  function applyBreedSpecificMutations(gene, offspring, breedName) {
    if (!breedName || breedName === 'None') {
      return offspring; // No modifications for mixed breeds
    }
  
    // Map of genes to affected breeds
    const affectedBreeds = {
      'Hypertrophic Cardiomyopathy (HCM)': ['Maine Coon', 'Ragdoll', 'Siberian', 'Norwegian Forest Cat', 'RagaMuffin'],
      'Polycystic Kidney Disease (PKD)': ['Persian'],
      'Progressive Retinal Atrophy (PRA)': [
        'Abyssinian',
        'Siamese',
        'Persian',
        'Balinese',
        'Colorpoint Shorthair',
        'Oriental',
      ],
      'Brachycephalic Gene': ['Exotic', 'Persian'],
      'Polydactyly': ['Maine Coon'],
    };
  
    // Check if this breed is affected by this gene
    if (affectedBreeds[gene] && affectedBreeds[gene].includes(breedName)) {
      // 10% chance for mutation in affected breeds
      if (Math.random() < 0.1) {
        console.log(`Mutation applied for ${gene} in ${breedName}`);
  
        // Return modified offspring based on the gene
        if (gene === 'Progressive Retinal Atrophy (PRA)') {
          return Array(offspring.length).fill('pp'); // PRA is recessive
        } else {
          // For dominant conditions, make heterozygous
          const dominantAlleles = {
            'Hypertrophic Cardiomyopathy (HCM)': 'Hh',
            'Polycystic Kidney Disease (PKD)': 'Kk',
            'Brachycephalic Gene': 'Bb',
            'Polydactyly': 'Pp',
          };
  
          return Array(offspring.length).fill(dominantAlleles[gene]);
        }
      }
    }
  
    return offspring; // No mutation
  }
  
  // Calculate and display results
  // Calculate and display results
  function calculateResults() {
    const coatResultsDiv = document.getElementById('coat-results');
    const healthResultsDiv = document.getElementById('health-results');
  
    coatResultsDiv.innerHTML = '<h3>Coat Color Predictions</h3>';
    healthResultsDiv.innerHTML = '<h3>Health Condition Predictions</h3>';
  
    // REMOVED: The call to addParentInfo(coatResultsDiv);
    
    // Calculate coat color gene results
    coatColorGenes.forEach((gene) => {
      if (gene !== 'Red') {
        const offspring = punnettSquare(simulationData.maleGenotypes[gene], simulationData.femaleGenotypes[gene], gene);
        const probabilities = calculateProbabilities(offspring);
        coatResultsDiv.innerHTML += generateResultHTML(gene, probabilities);
      }
    });
  
    // Special handling for Red gene
    const redOffspring = calculateRedGeneOffspring(
      simulationData.maleGenotypes['Red'],
      simulationData.femaleGenotypes['Red']
    );
  
    // Use the function to generate Red gene HTML with descriptions
    coatResultsDiv.innerHTML += updateRedGeneDisplay(coatResultsDiv, redOffspring);
  
    // Calculate health gene results
    healthGenes.forEach((gene) => {
      const offspring = punnettSquare(simulationData.maleGenotypes[gene], simulationData.femaleGenotypes[gene], gene);
  
      // Apply breed-specific modifications
      const selectedBreed = simulationData.selectedBreed;
      const modifiedOffspring = applyBreedSpecificMutations(gene, offspring, selectedBreed);
  
      // Calculate and display probabilities
      const probabilities = calculateProbabilities(modifiedOffspring);
  
      // Add extra information for breed-specific conditions
      let extraInfo = '';
      if (selectedBreed !== 'None') {
        if (
          gene === 'Hypertrophic Cardiomyopathy (HCM)' &&
          ['Maine Coon', 'Ragdoll', 'Siberian', 'Norwegian Forest Cat', 'RagaMuffin'].includes(selectedBreed)
        ) {
          extraInfo = `<p class="breed-alert">${selectedBreed} cats have increased risk of HCM.</p>`;
        } else if (gene === 'Polycystic Kidney Disease (PKD)' && selectedBreed === 'Persian') {
          extraInfo = `<p class="breed-alert">Persian cats have increased risk of PKD.</p>`;
        } else if (
          gene === 'Progressive Retinal Atrophy (PRA)' &&
          ['Abyssinian', 'Siamese', 'Persian', 'Balinese', 'Colorpoint Shorthair', 'Oriental'].includes(selectedBreed)
        ) {
          extraInfo = `<p class="breed-alert">${selectedBreed} cats have increased risk of PRA.</p>`;
        } else if (gene === 'Brachycephalic Gene' && ['Exotic', 'Persian'].includes(selectedBreed)) {
          extraInfo = `<p class="breed-alert">${selectedBreed} cats are brachycephalic breeds.</p>`;
        } else if (gene === 'Polydactyly' && selectedBreed === 'Maine Coon') {
          extraInfo = `<p class="breed-alert">Maine Coon cats have increased incidence of polydactyly.</p>`;
        }
      }
  
      healthResultsDiv.innerHTML += generateResultHTML(gene, probabilities, extraInfo);
    });
  }
  
  
  // Generate HTML for result display
  // Generate HTML for result display
function generateResultHTML(gene, probabilities, extraInfo = '') {
  let html = `
      <div class="result-item">
          <h4>${gene}</h4>
          ${extraInfo}
  `;

  for (const genotype in probabilities) {
    const probability = probabilities[genotype].toFixed(1);
    const description = getVisualTraitDescription(gene, genotype);
    
    html += `
            <div class="result-row">
                <div class="result-genotype">${genotype}</div>
                <div class="result-probability">
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${probability}%"></div>
                    </div>
                    <span>${probability}%</span>
                </div>
            </div>
    `;
    
    // Add description if available
    if (description) {
      html += `
            <div class="result-description">
                <p>${probability}% ${genotype}: ${description}</p>
            </div>
      `;
    }
  }

  html += `</div>`;

  return html;
}
  
  // Generate progress bars for probabilities
  function generateProgressBars(probabilities) {
    let html = '';
  
    for (const genotype in probabilities) {
      const probability = probabilities[genotype].toFixed(1);
  
      html += `
              <div class="result-row">
                  <div class="result-genotype">${genotype}</div>
                  <div class="result-probability">
                      <div class="progress-bar">
                          <div class="progress-bar-fill" style="width: ${probability}%"></div>
                      </div>
                      <span>${probability}%</span>
                  </div>
              </div>
          `;
    }
  
    return html || '<p>No data available</p>';
  }
  // Update the Red gene display to include visual trait descriptions
  function updateRedGeneDisplay(coatResultsDiv, redOffspring) {
    const maleProbabilities = calculateProbabilities(redOffspring.maleOffspring);
    const femaleProbabilities = calculateProbabilities(redOffspring.femaleOffspring);
  
    // Display results without parent info
    let redGeneHTML = `
      <div class="result-item">
        <h4>Red Gene</h4>
        <p><strong>Male Offspring:</strong></p>
    `;
  
    // Male offspring results
    if (Object.keys(maleProbabilities).length > 0) {
      for (const genotype in maleProbabilities) {
        const probability = maleProbabilities[genotype].toFixed(1);
        const description = getVisualTraitDescription('Red', genotype);
        
        redGeneHTML += `
          <div class="result-row">
              <div class="result-genotype">${genotype}</div>
              <div class="result-probability">
                  <div class="progress-bar">
                      <div class="progress-bar-fill" style="width: ${probability}%"></div>
                  </div>
                  <span>${probability}%</span>
              </div>
          </div>
        `;
        
        // Add description
        if (description) {
          redGeneHTML += `
            <div class="result-description">
                <p>${probability}% ${genotype}: ${description}</p>
            </div>
          `;
        }
      }
    } else {
      redGeneHTML += '<p>No male offspring data available.</p>';
    }
  
    // Female offspring results
    redGeneHTML += `<p><strong>Female Offspring:</strong></p>`;
    
    if (Object.keys(femaleProbabilities).length > 0) {
      for (const genotype in femaleProbabilities) {
        const probability = femaleProbabilities[genotype].toFixed(1);
        const description = getVisualTraitDescription('Red', genotype);
        
        redGeneHTML += `
          <div class="result-row">
              <div class="result-genotype">${genotype}</div>
              <div class="result-probability">
                  <div class="progress-bar">
                      <div class="progress-bar-fill" style="width: ${probability}%"></div>
                  </div>
                  <span>${probability}%</span>
              </div>
          </div>
        `;
        
        // Add description
        if (description) {
          redGeneHTML += `
            <div class="result-description">
                <p>${probability}% ${genotype}: ${description}</p>
            </div>
          `;
        }
      }
    } else {
      redGeneHTML += '<p>No female offspring data available.</p>';
    }
  
    redGeneHTML += `</div>`;
    
    return redGeneHTML;
  }
  // Reset simulation data and forms
  function resetSimulation() {
    // Reset data
    simulationData.selectedBreed = 'None';
    simulationData.knowGenotypes = false;
    simulationData.maleGenotypes = {};
    simulationData.femaleGenotypes = {};
    simulationData.malteseDilutionVisible = {
      male: false,
      female: false,
    };
  
    // Reset form elements
    document.getElementById('same-breed').checked = false;
    document.getElementById('same-breed-text').textContent = 'No';
    document.getElementById('breed-group').style.display = 'none';
    document.getElementById('cat-breed').value = 'None';
    document.getElementById('breed-info-box').style.display = 'none';
  
    document.getElementById('know-genotypes').checked = false;
    document.getElementById('know-genotypes-text').textContent = 'No';
  
    // Reset all selects to first option
    document.querySelectorAll('select').forEach((select) => {
      if (select.options.length > 0) {
        select.selectedIndex = 0;
      }
    });
  
    // Reset Maltese Dilution visibility
    toggleMalteseDilution('male', false);
    toggleMalteseDilution('female', false);
  }// Add to your existing script.js file

// Store generated kittens history
const kittenHistory = [];

// Function to randomly select a trait based on probabilities
function selectTraitBasedOnProbability(probabilities) {
  // Convert object of genotypes and probabilities to arrays for selection
  const genotypes = Object.keys(probabilities);
  const weights = genotypes.map(genotype => probabilities[genotype]);
  
  // Normalize weights to ensure they sum to 100
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const normalizedWeights = weights.map(weight => weight / totalWeight * 100);
  
  // Generate a random number between 0 and 100
  const randomNum = Math.random() * 100;
  
  // Select based on weighted probability
  let cumulativeWeight = 0;
  for (let i = 0; i < genotypes.length; i++) {
    cumulativeWeight += normalizedWeights[i];
    if (randomNum <= cumulativeWeight) {
      return genotypes[i];
    }
  }
  
  // Default return in case of rounding errors
  return genotypes[genotypes.length - 1];
}

// Function to convert genotype to phenotype (trait description)
function convertGenotypeToPhenotype(gene, genotype) {
  // Basic mapping of genotypes to descriptive traits
  switch(gene) {
    case 'Agouti':
      return genotype.includes('a') && genotype.includes('a') ? 'Solid color' : 'Tabby pattern';
    
    case 'White Spotting':
      if (genotype === 'SS') return 'High white spotting';
      if (genotype === 'Ss') return 'Medium white spotting';
      return 'No white spots';
    
    case 'Silver':
      return genotype.includes('I') ? 'Silver coat' : 'Non-silver coat';
    
    case 'Eumelanin':
      if (genotype.includes('B') && !genotype.includes('b') && !genotype.includes('c')) return 'Black base';
      if (genotype.includes('b') && !genotype.includes('c')) return 'Brown base';
      if (genotype.includes('c')) return 'Cinnamon base';
      return 'Unknown base color';
    
    case 'Red':
      if (genotype === 'XOY') return 'Red male';
      if (genotype === 'XBY') return 'Non-red male';
      if (genotype === 'XOXO') return 'Red female';
      if (genotype === 'XOXB') return 'Tortoiseshell female';
      if (genotype === 'XBXB') return 'Non-red female';
      return 'Unknown color pattern';
    
    case 'Dilution':
      return genotype === 'dd' ? 'Diluted color' : 'Full color';
    
    case 'Maltese Dilution':
      return genotype === 'dd' ? 'Caramelized color' : 'Standard dilution';
    
    case 'Siamese':
      return genotype === 'ss' ? 'Siamese pattern' : 'Non-pointed pattern';
    
    case 'Curly Coat (Rex Gene)':
      return genotype === 'rr' ? 'Curly coat' : 'Straight coat';
    
    case 'Hairless Cats (Sphynx or Don Sphynx)':
      return genotype.includes('S') ? 'Hairless' : 'Normal coat';
    
    case 'Taillessness (Manx Gene)':
      return genotype === 'Mm' ? 'Tailless or short tail' : 'Normal tail';
    
    case 'Hypertrophic Cardiomyopathy (HCM)':
      return genotype.includes('H') ? 'At risk for HCM' : 'Low risk for HCM';
    
    case 'Polycystic Kidney Disease (PKD)':
      return genotype.includes('K') ? 'At risk for PKD' : 'Low risk for PKD';
    
    case 'Brachycephalic Gene':
      return genotype.includes('B') ? 'Brachycephalic face' : 'Normal face shape';
    
    case 'Progressive Retinal Atrophy (PRA)':
      return genotype === 'pp' ? 'At risk for PRA' : 'Low risk for PRA';
    
    case 'Polydactyly':
      return genotype.includes('P') ? 'Extra toes (polydactyl)' : 'Normal toe count';
    
    default:
      return `${genotype} (unknown trait)`;
  }
}

// Generate a random kitten based on the calculated probabilities
function generateRandomKitten() {
  const kittenGenotypes = {};
  const kittenTraits = {};
  
  try {
    // Process standard genes
    for (const gene of [...coatColorGenes, ...healthGenes]) {
      // Skip Red gene for special handling
      if (gene === 'Red') continue;
      
      // Get results from the DOM
      const headings = findElementsContainingText(document, '.result-item h4', gene);
      if (!headings || headings.length === 0) continue;
      
      const resultItem = findClosestAncestor(headings[0], '.result-item');
      
      if (resultItem) {
        const probabilities = {};
        
        // Extract probabilities from result rows
        const rows = resultItem.querySelectorAll('.result-row');
        rows.forEach(row => {
          const genotypeEl = row.querySelector('.result-genotype');
          const probabilityEl = row.querySelector('.result-probability span');
          
          if (genotypeEl && probabilityEl) {
            const genotype = genotypeEl.textContent.trim();
            const probabilityText = probabilityEl.textContent.trim();
            const probability = parseFloat(probabilityText);
            if (!isNaN(probability)) {
              probabilities[genotype] = probability;
            }
          }
        });
        
        // Select a genotype based on probabilities
        if (Object.keys(probabilities).length > 0) {
          const selectedGenotype = selectTraitBasedOnProbability(probabilities);
          kittenGenotypes[gene] = selectedGenotype;
          kittenTraits[gene] = convertGenotypeToPhenotype(gene, selectedGenotype);
        }
      }
    }
    
    // Special handling for Red gene (sex-linked)
    const redHeadings = findElementsContainingText(document, '.result-item h4', 'Red Gene');
    let redResultItem = null;
    
    if (redHeadings && redHeadings.length > 0) {
      redResultItem = findClosestAncestor(redHeadings[0], '.result-item');
    }
    
    if (redResultItem) {
      // Randomly decide if kitten is male or female
      const isMale = Math.random() < 0.5;
      
      let redSection, probabilities = {};
      
      const maleSectionText = findElementsContainingText(redResultItem, 'p', 'Male Offspring');
      const femaleSectionText = findElementsContainingText(redResultItem, 'p', 'Female Offspring');
      
      if (isMale && maleSectionText.length > 0) {
        redSection = maleSectionText[0].nextElementSibling;
        kittenTraits['Sex'] = 'Male';
      } else if (!isMale && femaleSectionText.length > 0) {
        redSection = femaleSectionText[0].nextElementSibling;
        kittenTraits['Sex'] = 'Female';
      } else {
        // Default if we can't find the sections
        kittenTraits['Sex'] = isMale ? 'Male' : 'Female';
      }
      
      // Check if there's data available for this sex
      if (redSection && !redSection.textContent.includes('No data available')) {
        const rows = redSection.querySelectorAll('.result-row');
        
        rows.forEach(row => {
          const genotypeEl = row.querySelector('.result-genotype');
          const probabilityEl = row.querySelector('.result-probability span');
          
          if (genotypeEl && probabilityEl) {
            const genotype = genotypeEl.textContent.trim();
            const probabilityText = probabilityEl.textContent.trim();
            const probability = parseFloat(probabilityText);
            if (!isNaN(probability)) {
              probabilities[genotype] = probability;
            }
          }
        });
        
        // Select a genotype based on probabilities
        if (Object.keys(probabilities).length > 0) {
          const selectedGenotype = selectTraitBasedOnProbability(probabilities);
          kittenGenotypes['Red'] = selectedGenotype;
          kittenTraits['Red'] = convertGenotypeToPhenotype('Red', selectedGenotype);
        } else {
          // If we couldn't parse the probabilities
          kittenGenotypes['Red'] = isMale ? 'XBY' : 'XBXB';
          kittenTraits['Red'] = isMale ? 'Non-red male' : 'Non-red female';
        }
      } else {
        // If no data available, assign a default value based on sex
        kittenGenotypes['Red'] = isMale ? 'XBY' : 'XBXB';
        kittenTraits['Red'] = isMale ? 'Non-red male' : 'Non-red female';
      }
    } else {
      // If no Red gene section found, assign default values
      const isMale = Math.random() < 0.5;
      kittenTraits['Sex'] = isMale ? 'Male' : 'Female';
      kittenGenotypes['Red'] = isMale ? 'XBY' : 'XBXB';
      kittenTraits['Red'] = isMale ? 'Non-red male' : 'Non-red female';
    }
  } catch (error) {
    console.error("Error generating kitten:", error);
    // Provide fallback values in case of errors
    if (!kittenTraits['Sex']) {
      const isMale = Math.random() < 0.5;
      kittenTraits['Sex'] = isMale ? 'Male' : 'Female';
    }
  }
  
  // Generate the name
  const kittenNames = [
    'Whiskers', 'Mittens', 'Luna', 'Oliver', 'Bella', 'Charlie', 'Lucy', 'Max', 
    'Daisy', 'Simba', 'Nala', 'Milo', 'Sophie', 'Jack', 'Lily', 'Leo', 'Chloe', 
    'Oscar', 'Zoe', 'Jasper', 'Ruby', 'Felix', 'Cleo', 'Sam', 'Rosie', 'Tiger', 
    'Molly', 'Shadow', 'Misty', 'Smokey', 'Kitty', 'Pepper', 'Ginger', 'Oreo', 
    'Maple', 'Mocha', 'Ziggy', 'Pickles', 'Pumpkin', 'Cinder', 'Socks', 'Scout',
    'Willow', 'Penny', 'Ollie', 'Pebbles', 'Casper', 'Midnight', 'Stormy', 'Ash', 
    'Annabelle', 'Alison', 'Meredith', 'Anna', 'Isabella', 'Aviva', 'Emma', 'Neela',
    'Pablo', 'Julietta', 'Sean', 'Alon', 'Carmen', 'Sesame', ''
  ];
  
  const randomName = kittenNames[Math.floor(Math.random() * kittenNames.length)];
  
  // Generate a unique ID for this kitten
  const kittenId = Date.now().toString() + Math.floor(Math.random() * 1000);
  
  const kittenData = {
    id: kittenId,
    name: randomName,
    genotypes: kittenGenotypes,
    traits: kittenTraits,
    created: new Date().toISOString()
  };
  
  // Add to history
  kittenHistory.push(kittenData);
  
  // Keep history to last 10 kittens
  if (kittenHistory.length > 10) {
    kittenHistory.shift();
  }
  
  return kittenData;
}

// Helper function for finding elements containing specific text
function findElementsContainingText(rootElement, selector, text) {
  const elements = rootElement.querySelectorAll(selector);
  return Array.from(elements).filter(el => el.textContent.includes(text));
}

// Helper function to find an element's closest ancestor matching a selector
function findClosestAncestor(element, selector) {
  let currentEl = element;
  while (currentEl && currentEl !== document) {
    if (currentEl.matches(selector)) return currentEl;
    currentEl = currentEl.parentElement;
  }
  return null;
}

// Show the generated kitten in a modal
function displayKitten(kitten) {
  try {
    // Create a description of the kitten based on traits
    let kittenDescription = `<h3>${kitten.name}</h3>`;
    
    // First display the basic physical traits
    kittenDescription += `<p><strong>Sex:</strong> ${kitten.traits['Sex'] || 'Unknown'}</p>`;
    
    // Base color determination
    let baseColor = "";
    
    // Start with determining if the kitten is red or not
    if (kitten.traits['Red'] && (kitten.traits['Red'].includes('Red') || kitten.traits['Red'].includes('Tortoiseshell'))) {
      if (kitten.traits['Red'].includes('Tortoiseshell')) {
        baseColor = "Tortoiseshell";
      } else {
        baseColor = "Red";
      }
    } else {
      // If not red, determine the base eumelanin color
      if (kitten.traits['Eumelanin']) {
        baseColor = kitten.traits['Eumelanin'] || "";
        
        // Add dilution effect if present
        if (kitten.traits['Dilution'] === 'Diluted color') {
          if (baseColor.includes('Black')) baseColor = baseColor.replace('Black', 'Blue-gray');
          else if (baseColor.includes('Brown')) baseColor = baseColor.replace('Brown', 'Lilac');
          else if (baseColor.includes('Cinnamon')) baseColor = baseColor.replace('Cinnamon', 'Fawn');
        }
        
        // Add caramelization if applicable
        if (kitten.traits['Maltese Dilution'] === 'Caramelized color') {
          baseColor += " with caramel tones";
        }
      }
    }
    
    // Add pattern information
    let pattern = "";
    if (kitten.traits['Agouti'] === 'Tabby pattern') {
      pattern = "Tabby";
    }
    
    // Add coat type and other physical traits
    let physicalDescription = [];
    
    // Add base color as the first trait
    if (baseColor) physicalDescription.push(baseColor);
    
    // Add pattern information
    if (pattern) physicalDescription.push(pattern);
    
    // Add additional coat characteristics, removing "with" prefixes
    if (kitten.traits['Silver'] === 'Silver coat') physicalDescription.push('Silver');
    
    // Clean up white spotting text
    if (kitten.traits['White Spotting'] && kitten.traits['White Spotting'] !== 'No white spots') {
      const spotting = kitten.traits['White Spotting'].replace('with ', '').replace(' white spots', '');
      physicalDescription.push(`${spotting} white spotting`);
    }
    
    // Clean up point coloration text
    if (kitten.traits['Siamese'] === 'Siamese pattern') physicalDescription.push('Point coloration');
    
    // Coat texture - remove "with" prefixes
    if (kitten.traits['Curly Coat (Rex Gene)'] === 'Curly coat') physicalDescription.push('Curly fur');
    if (kitten.traits['Hairless Cats (Sphynx or Don Sphynx)'] === 'Hairless') physicalDescription.push('Hairless');
    
    // Other physical features - remove "with" prefixes
    if (kitten.traits['Taillessness (Manx Gene)'] === 'Tailless or short tail') 
      physicalDescription.push('Short tail or tailless');
    if (kitten.traits['Polydactyly'] === 'Extra toes (polydactyl)') 
      physicalDescription.push('Extra toes (polydactyl)');
    if (kitten.traits['Brachycephalic Gene'] === 'Brachycephalic face') 
      physicalDescription.push('Flat face');
    
    if (physicalDescription.length === 0) {
      physicalDescription.push('Domestic cat with standard features');
    }
    
    // Create appearance description as bullet points inside the same box as the heading
    kittenDescription += `<div class="trait-section">
      <strong>Appearance:</strong>
      <ul class="kitten-traits-list">`;
    
    physicalDescription.forEach(trait => {
      kittenDescription += `<li>${trait}</li>`;
    });
    
    kittenDescription += `</ul>
    </div>`;
    
    // Health section
    let healthConcerns = [];
    if (kitten.traits['Hypertrophic Cardiomyopathy (HCM)'] === 'At risk for HCM') 
      healthConcerns.push('Hypertrophic Cardiomyopathy (HCM)');
    if (kitten.traits['Polycystic Kidney Disease (PKD)'] === 'At risk for PKD') 
      healthConcerns.push('Polycystic Kidney Disease (PKD)');
    if (kitten.traits['Progressive Retinal Atrophy (PRA)'] === 'At risk for PRA') 
      healthConcerns.push('Progressive Retinal Atrophy (PRA)');
    
    let healthStatus = 'health-good';
    if (healthConcerns.length > 0) {
      healthStatus = healthConcerns.length > 1 ? 'health-risk' : 'health-concern';
      kittenDescription += `<div class="trait-section">
        <strong>Health Considerations:</strong> <span class="health-status ${healthStatus}"></span>
        May be at risk for ${healthConcerns.join(', ')}.
      </div>`;
    } else {
      kittenDescription += `<div class="trait-section">
        <strong>Health Considerations:</strong> <span class="health-status ${healthStatus}"></span>
        No significant genetic health concerns detected.
      </div>`;
    }
    
    // Personality - random generated based on traits
    const personalities = [
      'Playful and energetic', 'Calm and affectionate', 'Independent and curious',
      'Social and talkative', 'Shy but loving', 'Bold and adventurous',
      'Gentle and quiet', 'Mischievous and clever', 'Loyal and protective'
    ];
    
    // Biased randomization based on traits
    let personalityIndex = Math.floor(Math.random() * personalities.length);
    
    // If siamese, more likely to be vocal
    if (kitten.traits['Siamese'] === 'Siamese pattern') {
      personalityIndex = 3; // Social and talkative
    }
    
    kittenDescription += `<div class="trait-section">
      <strong>Personality:</strong> ${personalities[personalityIndex]}
    </div>`;
    
    // Genotype section (collapsible for those interested)
    kittenDescription += `<div class="genotype-details">
      <button id="show-genotypes" class="btn btn-secondary">Show Genetic Details</button>
      <div id="genotype-list" style="display:none;">
        <h4>Genetic Makeup:</h4>
        <ul>`;
    
    for (const gene in kitten.genotypes) {
      kittenDescription += `<li><strong>${gene}:</strong> <span>${kitten.genotypes[gene]}</span></li>`;
    }
    
    kittenDescription += `</ul>
      </div>
    </div>`;
    
    // Create modal if it doesn't exist
    let modalContainer = document.getElementById('kitten-modal-container');
    
    if (!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'kitten-modal-container';
      modalContainer.className = 'modal-container';
      document.body.appendChild(modalContainer);
    }
    
    // Generate a random coat icon class based on kitten traits
    let catIconClass = 'fa-cat';
    if (kitten.traits['Sex'] === 'Female' && Math.random() > 0.5) {
      catIconClass = 'fa-cat';
    }
    
    // Determine cat color class based on traits
    let catColorClass = '';
    if (baseColor.includes('Red') || baseColor.includes('Tortoiseshell')) {
      catColorClass = 'cat-orange';
    } else if (baseColor.includes('Black') || baseColor.includes('Blue-gray')) {
      catColorClass = 'cat-dark';
    } else if (baseColor.includes('Cinnamon') || baseColor.includes('Fawn')) {
      catColorClass = 'cat-cinnamon';
    } else if (kitten.traits['Silver'] === 'Silver coat') {
      catColorClass = 'cat-silver';
    } else {
      catColorClass = 'cat-default';
    }
    
    // Set modal content
    modalContainer.innerHTML = `
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="kitten-result">
          <div class="kitten-avatar">
            <i class="fas ${catIconClass} ${catColorClass}"></i>
          </div>
          <div class="kitten-details">
            ${kittenDescription}
          </div>
        </div>
        <div class="kitten-history-section">
          <button id="toggle-history" class="btn btn-secondary">
            <i class="fas fa-history"></i> Show Previous Kittens
          </button>
          <div id="kitten-history" style="display:none;">
            <h4>Previously Generated Kittens</h4>
            <div class="kitten-history-list"></div>
          </div>
        </div>
        <div class="modal-actions">
          <button id="generate-another-kitten" class="btn btn-primary">
            <i class="fas fa-paw"></i> Generate Another Kitten
          </button>
          <button id="save-kitten" class="btn btn-secondary">
            <i class="fas fa-save"></i> Save Kitten Details
          </button>
        </div>
      </div>
    `;
    
    // Show the modal
    modalContainer.style.display = 'flex';
    
    // Fill history list if there are previous kittens
    if (kittenHistory.length > 1) {
      const historyList = modalContainer.querySelector('.kitten-history-list');
      historyList.innerHTML = '';
      
      // Skip the current kitten (which is the last one in history)
      for (let i = kittenHistory.length - 2; i >= 0; i--) {
        const pastKitten = kittenHistory[i];
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
          <span class="history-name">${pastKitten.name}</span>
          <button class="btn-view-kitten" data-kitten-id="${pastKitten.id}">View</button>
        `;
        historyList.appendChild(historyItem);
      }
    }
    
    // Add event listeners
    modalContainer.querySelector('.close-modal').addEventListener('click', function() {
      modalContainer.style.display = 'none';
    });
    
    modalContainer.querySelector('#show-genotypes').addEventListener('click', function() {
      const genotypeList = modalContainer.querySelector('#genotype-list');
      if (genotypeList.style.display === 'none') {
        genotypeList.style.display = 'block';
        this.textContent = 'Hide Genetic Details';
      } else {
        genotypeList.style.display = 'none';
        this.textContent = 'Show Genetic Details';
      }
    });
    
    modalContainer.querySelector('#generate-another-kitten').addEventListener('click', function() {
      const newKitten = generateRandomKitten();
      displayKitten(newKitten);
    });
    
    // Toggle history view
    modalContainer.querySelector('#toggle-history').addEventListener('click', function() {
      const historySection = modalContainer.querySelector('#kitten-history');
      if (historySection.style.display === 'none') {
        historySection.style.display = 'block';
        this.innerHTML = '<i class="fas fa-history"></i> Hide Previous Kittens';
      } else {
        historySection.style.display = 'none';
        this.innerHTML = '<i class="fas fa-history"></i> Show Previous Kittens';
      }
    });
    
    // View previous kitten buttons
    const viewButtons = modalContainer.querySelectorAll('.btn-view-kitten');
    viewButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const kittenId = this.getAttribute('data-kitten-id');
        const selectedKitten = kittenHistory.find(k => k.id === kittenId);
        if (selectedKitten) {
          displayKitten(selectedKitten);
        }
      });
    });
    
    modalContainer.querySelector('#save-kitten').addEventListener('click', function() {
      // Create a text version for saving
      let kittenText = `Kitten Name: ${kitten.name}\n\n`;
      
      kittenText += `Sex: ${kitten.traits['Sex'] || 'Unknown'}\n`;
      kittenText += `Appearance: ${physicalDescription.join(' ')}\n\n`;
      
      if (healthConcerns.length > 0) {
        kittenText += `Health Considerations: May be at risk for ${healthConcerns.join(', ')}.\n\n`;
      } else {
        kittenText += `Health Considerations: No significant genetic health concerns detected.\n\n`;
      }
      
      kittenText += `Personality: ${personalities[personalityIndex]}\n\n`;
      
      kittenText += `Genetic Makeup:\n`;
      for (const gene in kitten.genotypes) {
        kittenText += `${gene}: ${kitten.genotypes[gene]}\n`;
      }
      
      // Create a temporary textarea to copy text
      const textarea = document.createElement('textarea');
      textarea.value = kittenText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      
      // Show confirmation
      alert('Kitten details copied to clipboard!');
    });
    
    // Close when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
      }
    });
  } catch (error) {
    console.error("Error displaying kitten:", error);
    alert("There was an error generating your kitten. Please try again.");
  }
}
// Add CSS for the kitten modal
function addModalStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .modal-container {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1000;
      justify-content: center;
      align-items: center;
      animation: fadeIn 0.3s ease-out;
    }
    
    .modal-content {
      background-color: white;
      border-radius: var(--border-radius);
      max-width: 600px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      padding: 30px;
      position: relative;
      animation: slideIn 0.3s ease-out;
    }
    
    .close-modal {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 24px;
      cursor: pointer;
      color: var(--text-light);
      transition: color 0.2s;
    }
    
    .close-modal:hover {
      color: var(--danger-color);
    }
    
    .kitten-result {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .kitten-avatar {
      font-size: 80px;
      color: var(--primary-color);
      margin-bottom: 20px;
    }
    
    .kitten-details {
      width: 100%;
    }
    
    .kitten-details h3 {
      color: var(--primary-dark);
      margin-bottom: 15px;
      font-size: 1.8rem;
    }
    
    .kitten-details p {
      margin-bottom: 12px;
      line-height: 1.5;
      text-align: left;
    }
    
    .genotype-details {
      margin-top: 20px;
      text-align: center;
    }
    
    #genotype-list {
      margin-top: 15px;
      text-align: left;
    }
    
    #genotype-list ul {
      list-style-type: none;
      padding: 0;
    }
    
    #genotype-list li {
      margin-bottom: 5px;
      padding: 5px 0;
      border-bottom: 1px solid var(--border-color);
    }
    
    .modal-actions {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 30px;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideIn {
      from { transform: translateY(-50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @media (max-width: 768px) {
      .modal-content {
        padding: 20px;
      }
      
      .modal-actions {
        flex-direction: column;
      }
      
      .kitten-avatar {
        font-size: 60px;
      }
    }
  `;
  
  document.head.appendChild(styleElement);
}

// Add the Generate Kitten button to the results section
// Replace the existing addGenerateKittenButton function with this version

function addGenerateKittenButton() {
  // Check if the button already exists to prevent duplicates
  const existingButton = document.getElementById('generate-kitten-btn');
  if (existingButton) {
    return; // Button already exists, don't create another one
  }
  
  // Add the button to the results section
  const resultActions = document.querySelector('#results-section .action-section');
  
  if (resultActions) {
    // Create the button and insert it before the Restart button
    const generateKittenBtn = document.createElement('button');
    generateKittenBtn.id = 'generate-kitten-btn';
    generateKittenBtn.className = 'btn btn-primary';
    generateKittenBtn.innerHTML = '<i class="fas fa-paw"></i> Generate Random Kitten';
    
    // Find the restart button
    const restartBtn = document.getElementById('restart-btn');
    
    // Insert before restart button
    if (restartBtn) {
      resultActions.insertBefore(generateKittenBtn, restartBtn);
    } else {
      // If restart button isn't found, just append to the action section
      resultActions.appendChild(generateKittenBtn);
    }
    
    // Add event listener
    generateKittenBtn.addEventListener('click', function() {
      const kitten = generateRandomKitten();
      displayKitten(kitten);
    });
    
    console.log('Generate Kitten button added');
  }
}

// Also update the updateResultsDisplay function from our previous code
// to make sure it doesn't indirectly cause another button to be added

function updateResultsDisplay() {
  const originalCalculateResults = calculateResults;
  
  calculateResults = function() {
    // Call the original function
    originalCalculateResults();
    
    // REMOVED: All code that adds parent info to the results section
  };
}

// Update the setup event listeners function to include our new initialization
const originalSetupEventListeners = setupEventListeners;

setupEventListeners = function() {
  // Call the original function
  originalSetupEventListeners();
  
  // Add Calculate Results event handler modification
  const originalCalculateResults = calculateResults;
  
  calculateResults = function() {
    // Call the original function
    originalCalculateResults();
    
    // Add our button after results are displayed
    addGenerateKittenButton();
  };
};

// If the page is already loaded, add the button
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  const resultsSection = document.getElementById('results-section');
  if (resultsSection && resultsSection.classList.contains('active')) {
    addGenerateKittenButton();
  }
} // Add to your existing script.js file

// Expand simulationData to store parent names
simulationData.parentNames = {
  male: '',
  female: ''
};

// Function to add name input fields to male and female trait/genotype sections
function addParentNameFields() {
  // Add to male trait section
  const maleTraitsForm = document.getElementById('male-traits-form');
  if (maleTraitsForm) {
    const nameField = document.createElement('div');
    nameField.className = 'form-group';
    nameField.innerHTML = `
      <label for="male-name-input">Name (Optional):</label>
      <input type="text" id="male-name-input" class="form-control" placeholder="Enter male cat's name">
    `;
    maleTraitsForm.insertBefore(nameField, maleTraitsForm.firstChild);
  }
  
  // Add to female trait section
  const femaleTraitsForm = document.getElementById('female-traits-form');
  if (femaleTraitsForm) {
    const nameField = document.createElement('div');
    nameField.className = 'form-group';
    nameField.innerHTML = `
      <label for="female-name-input">Name (Optional):</label>
      <input type="text" id="female-name-input" class="form-control" placeholder="Enter female cat's name">
    `;
    femaleTraitsForm.insertBefore(nameField, femaleTraitsForm.firstChild);
  }
  
  // Add to male genotype section
  const maleGenotypeForm = document.getElementById('male-genotype-form');
  if (maleGenotypeForm) {
    const nameField = document.createElement('div');
    nameField.className = 'form-group';
    nameField.innerHTML = `
      <label for="male-genotype-name-input">Name (Optional):</label>
      <input type="text" id="male-genotype-name-input" class="form-control" placeholder="Enter male cat's name">
    `;
    maleGenotypeForm.insertBefore(nameField, maleGenotypeForm.firstChild);
  }
  
  // Add to female genotype section
  const femaleGenotypeForm = document.getElementById('female-genotype-form');
  if (femaleGenotypeForm) {
    const nameField = document.createElement('div');
    nameField.className = 'form-group';
    nameField.innerHTML = `
      <label for="female-genotype-name-input">Name (Optional):</label>
      <input type="text" id="female-genotype-name-input" class="form-control" placeholder="Enter female cat's name">
    `;
    femaleGenotypeForm.insertBefore(nameField, femaleGenotypeForm.firstChild);
  }
}

// Update event listeners to capture parent names
function updateEventListeners() {
  // Male traits form
  document.getElementById('male-traits-next-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('male-name-input');
    if (nameInput) {
      simulationData.parentNames.male = nameInput.value.trim();
    }
  });
  
  // Female traits form
  document.getElementById('female-traits-next-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('female-name-input');
    if (nameInput) {
      simulationData.parentNames.female = nameInput.value.trim();
    }
  });
  
  // Male genotype form
  document.getElementById('male-genotype-next-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('male-genotype-name-input');
    if (nameInput) {
      simulationData.parentNames.male = nameInput.value.trim();
    }
  });
  
  // Female genotype form
  document.getElementById('female-genotype-next-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('female-genotype-name-input');
    if (nameInput) {
      simulationData.parentNames.female = nameInput.value.trim();
    }
  });
}

// Include parent names in the results section

// Add a name input field to the kitten generation modal
function enhanceKittenModal() {
  const originalDisplayKitten = displayKitten;
  
  displayKitten = function(kitten) {
    // Call the original function
    originalDisplayKitten(kitten);
    
    // Add a name input field to the modal
    const modalContainer = document.getElementById('kitten-modal-container');
    if (modalContainer) {
      const kittenDetails = modalContainer.querySelector('.kitten-details');
      
      if (kittenDetails) {
        // Get the existing h3 element
        const heading = kittenDetails.querySelector('h3');
        
        if (heading) {
          const nameContainer = document.createElement('div');
          nameContainer.className = 'kitten-name-container';
          nameContainer.innerHTML = `
            <div class="name-input-group">
              <input type="text" id="custom-kitten-name" class="form-control" value="${kitten.name}" placeholder="Enter kitten name">
              <button id="update-kitten-name" class="btn btn-secondary">Update Name</button>
            </div>
          `;
          
          // Insert after heading
          heading.insertAdjacentElement('afterend', nameContainer);
          
          // Add event listener to update name button
          const updateNameBtn = modalContainer.querySelector('#update-kitten-name');
          const nameInput = modalContainer.querySelector('#custom-kitten-name');
          
          if (updateNameBtn && nameInput) {
            updateNameBtn.addEventListener('click', function() {
              const newName = nameInput.value.trim();
              if (newName) {
                // Update the kitten name
                kitten.name = newName;
                
                // Update the display
                heading.textContent = newName;
                
                // Update in history
                const kittenIndex = kittenHistory.findIndex(k => k.id === kitten.id);
                if (kittenIndex !== -1) {
                  kittenHistory[kittenIndex].name = newName;
                }
              }
            });
          }
        }
      }
    }
  };
}

// Add CSS for the new name input elements
function addNameInputStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .parent-info {
      background-color: #f0f8ff;
      padding: 15px;
      border-radius: var(--border-radius);
      margin-bottom: 20px;
      border-left: 4px solid var(--primary-color);
    }
    
    .parent-info h4 {
      color: var(--primary-dark);
      margin-bottom: 10px;
    }
    
    .parent-info p {
      margin: 5px 0;
    }
    
    .kitten-name-container {
      margin: 15px 0;
    }
    
    .name-input-group {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .name-input-group input {
      flex: 1;
    }
    
    #update-kitten-name {
      white-space: nowrap;
      padding: 8px 15px;
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      .name-input-group {
        flex-direction: column;
        gap: 5px;
      }
      
      #update-kitten-name {
        width: 100%;
      }
    }
  `;
  
  document.head.appendChild(styleElement);
}

// Initialize the new features
function initializeNameFeatures() {
  addParentNameFields();
  updateEventListeners();
  updateResultsDisplay();
  enhanceKittenModal();
  addNameInputStyles();
}

// Call the initialization function after the document is loaded
document.addEventListener('DOMContentLoaded', function() {
  // This will be called after your existing DOMContentLoaded event
  setTimeout(initializeNameFeatures, 100);
});

// Modify resetSimulation to reset parent names
const originalResetSimulation = resetSimulation;
resetSimulation = function() {
  // Call the original function
  originalResetSimulation();
  
  // Reset parent names
  simulationData.parentNames = {
    male: '',
    female: ''
  };
  
  // Reset input fields if they exist
  const maleNameInput = document.getElementById('male-name-input');
  const femaleNameInput = document.getElementById('female-name-input');
  const maleGenotypeNameInput = document.getElementById('male-genotype-name-input');
  const femaleGenotypeNameInput = document.getElementById('female-genotype-name-input');
  
  if (maleNameInput) maleNameInput.value = '';
  if (femaleNameInput) femaleNameInput.value = '';
  if (maleGenotypeNameInput) maleGenotypeNameInput.value = '';
  if (femaleGenotypeNameInput) femaleGenotypeNameInput.value = '';
}
// Function to get the appropriate description based on whether user knows genotypes
function getDescription(gene, knowsGenotypes) {
  return knowsGenotypes ? genotypeDescriptions[gene] : traitDescriptions[gene];
}

// Update your setupInfoPopovers function to use the appropriate descriptions
// Replace the current setupInfoPopovers function with this one
function setupInfoPopovers() {
  const popoverContainer = document.getElementById('popover-container');
  let activePopover = null;
  let activeInfoIcon = null;

  // Add event listener for clicks on info icons
  document.addEventListener('click', function (event) {
    const target = event.target;

    // Check if clicked element is an info icon
    if (target.classList.contains('info-icon')) {
      event.preventDefault();

      const geneName = target.dataset.gene;
      // Determine if we're in the genotype knowledge context
      const isGenotypeForm = target.closest('#male-genotype-form') || 
                            target.closest('#female-genotype-form');
      
      // Get the appropriate description
      const description = isGenotypeForm ? 
                          genotypeDescriptions[geneName] : 
                          traitDescriptions[geneName];

      // Store the info icon element for repositioning on scroll
      activeInfoIcon = target;

      // Create popover content
      popoverContainer.innerHTML = `
                <div class="popover-arrow"></div>
                <h4>${geneName}</h4>
                <p>${description}</p>
            `;

      // Position popover and arrow
      const rect = target.getBoundingClientRect();
      positionPopover(popoverContainer, rect);

      // Show the popover
      popoverContainer.classList.add('active');
      activePopover = popoverContainer;
    }
    // If clicking outside of popover, hide it
    else if (activePopover && !activePopover.contains(target)) {
      closePopover();
    }
  });

  // Close popover when pressing ESC
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && activePopover) {
      closePopover();
    }
  });

  // Handle window resize
  window.addEventListener('resize', function () {
    if (activePopover) {
      closePopover();
    }
  });

  // Handle scrolling - reposition the popover when scrolling
  window.addEventListener(
    'scroll',
    function () {
      if (activePopover && activeInfoIcon) {
        const rect = activeInfoIcon.getBoundingClientRect();
        positionPopover(popoverContainer, rect);
      }
    },
    { passive: true }
  );

  // Function to close the popover
  function closePopover() {
    activePopover.classList.remove('active');
    activePopover = null;
    activeInfoIcon = null;
  }
}
// Add CSS styles for the new description elements
function addDescriptionStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .result-description {
      padding: 8px 10px 12px 120px;
      margin-top: -5px;
      margin-bottom: 10px;
      font-size: 0.9rem;
      color: var(--text-color);
      background-color: rgba(106, 90, 205, 0.05);
      border-radius: 0 0 var(--border-radius) var(--border-radius);
      border-left: 2px solid var(--primary-light);
    }
    
    .result-description p {
      margin: 0;
      line-height: 1.5;
    }
    
    @media (max-width: 768px) {
      .result-description {
        padding: 8px 10px;
        margin-top: 5px;
        margin-bottom: 15px;
      }
    }
  `;
  document.head.appendChild(styleElement);
}

// Call this function after the page loads
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(addDescriptionStyles, 100);
});
function fixDoubleBulletPoints() {
  const styleElement = document.createElement('style');
  
  styleElement.textContent = `
    /* Fix for double bullet points in kitten generation */
    .kitten-traits-list {
      list-style-type: none !important;
      list-style: none !important;
      padding-left: 0 !important;
    }
    
    .kitten-traits-list li {
      list-style-type: none !important;
      position: relative;
      padding-left: 24px !important;
    }
    
    .kitten-traits-list li::before {
      content: '•' !important;
      position: absolute !important;
      left: 0 !important;
      top: 2px !important;
      color: var(--primary-color) !important;
      font-size: 18px !important;
    }
  `;
  
  document.head.appendChild(styleElement);
}

// Add this to your initialization code
document.addEventListener('DOMContentLoaded', function() {
  // Your existing code...
  setTimeout(fixDoubleBulletPoints, 200);
});
// Helper function to add parent info once
function addParentInfo(coatResultsDiv) {
  const maleName = simulationData.parentNames?.male;
  const femaleName = simulationData.parentNames?.female;
  
  if (coatResultsDiv && !coatResultsDiv.querySelector('.parent-info')) {
    let parentInfo = '<div class="parent-info">';
    parentInfo += '<h4>Parents</h4>';
    
    if (maleName) {
      parentInfo += `<p><strong>Male parent:</strong> ${maleName}</p>`;
    } else {
      parentInfo += '<p><strong>Male parent:</strong> Unnamed</p>';
    }
    
    if (femaleName) {
      parentInfo += `<p><strong>Female parent:</strong> ${femaleName}</p>`;
    } else {
      parentInfo += '<p><strong>Female parent:</strong> Unnamed</p>';
    }
    
    parentInfo += '</div>';
    
    // Insert after the heading
    const heading = coatResultsDiv.querySelector('h3');
    if (heading) {
      heading.insertAdjacentHTML('afterend', parentInfo);
    }
  }
}

function removeParentInfoStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Hide any parent-info elements that might still exist */
    .parent-info {
      display: none !important;
    }
  `;
  document.head.appendChild(styleElement);
}
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(removeParentInfoStyles, 200);
});