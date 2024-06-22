<script lang="ts">
    import WeightLabel from './lib/weight_label.svelte'

    import cornerSvg from '/src/assets/corner.svg';
    import waterCanPng from '/src/assets/Water_Can_Big_PNG.png';
    import titleJpg from '/src/assets/title.jpg';

    import { parseTsvData } from './lib/data_parser';
    import { toCharacterStats } from './lib/stats';
    import { type ChartViewModel, toViewModel, getMonsterFalinViewModel } from './lib/view_model';
    import { formatWeight } from './lib/weight_utils';

    async function fetchData(): Promise<ChartViewModel> {
      let response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vShRwjPHvlfF_8R6YEjJ4LvbvJ8BOCn5r3HikzbXJhrJYklPAr19Ibbpmcb09wCg9Gr5_OhfX_F-1LS/pub?gid=0&single=true&output=tsv");
      return toViewModel(toCharacterStats(parseTsvData(await response.text())));
    }

    function selectChar(name: string) {
      console.log(`${name} is selected`)
    }
  </script>

  <main>
    {#await fetchData()}
      <p>loading data...</p>
    {:then viewModel}

      <svg viewBox="0 0 {viewModel.viewPortWidth} {viewModel.viewPortHeight}" xmlns="http://www.w3.org/2000/svg" class="chart">
        <defs>
          <linearGradient id="orangeGradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stop-color="#8b4b22" />
            <stop offset="100%" stop-color="#edc051" />
          </linearGradient>
          <linearGradient id="darkTealGradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stop-color="#084c56" />
            <stop offset="100%" stop-color="#10a5ad" />
          </linearGradient>
          <linearGradient id="redGradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stop-color="#901e1d" />
            <stop offset="100%" stop-color="#da3a37" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stop-color="#3a447f" />
            <stop offset="100%" stop-color="#86a8e2" />
          </linearGradient>
          <linearGradient id="purpleGradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stop-color="#4525cb" />
            <stop offset="100%" stop-color="#9464b6" />
          </linearGradient>
          <linearGradient id="darkGreenGradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stop-color="#0a4334" />
            <stop offset="100%" stop-color="#16a375" />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stop-color="#1e5119" />
            <stop offset="100%" stop-color="#41ba36" />
          </linearGradient>
          <linearGradient id="pinkGradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stop-color="#9d397b" />
            <stop offset="100%" stop-color="#ec61d4" />
          </linearGradient>

        </defs>

        <text x="15%" y="25%" class="small">
          <tspan text-anchor="middle">Every 1$* contributed to the collage adds</tspan>
          <tspan dy="3%" x="15%" text-anchor="middle">three pounds to the characters!</tspan>
          <tspan dy="2%" x="15%" text-anchor="middle" class="very-small">*Canadian Dollars, so  US Dollars go further</tspan>
          <tspan dy="4%" x="15%" text-anchor="middle" class="not-so-small">*</tspan>
          <tspan dy="1%" x="15%" text-anchor="middle">1lb goes to the character you choose by commenting</tspan>
          <tspan dy="3%" x="15%" text-anchor="middle">JUST their name with your contribution</tspan>
          <tspan dy="4%" x="15%" text-anchor="middle" class="not-so-small">*</tspan>
          <tspan dy="1%" x="15%" text-anchor="middle">1lb is split between them and their group</tspan>
          <tspan dy="4%" x="15%" text-anchor="middle" class="not-so-small">*</tspan>
          <tspan dy="1%" x="15%" text-anchor="middle">1lb goes to monster Falin</tspan>
          <tspan dy="3%" x="15%" text-anchor="middle"><a class="link-tree-link" href="https://linktr.ee/ebcart">Click here to fatten your favorite</a></tspan>
        </text>

        <image x="25%" y="3%" width="50%" xlink:href="{titleJpg}" />
        <image x="16%" y="9%" height="12%" xlink:href="{waterCanPng}" />


        <image
            xlink:href="{getMonsterFalinViewModel(viewModel).pictureLink}"
            x="4%"
            y="{5 / viewModel.viewPortHeight * viewModel.viewPortWidth}%"
            height="{getMonsterFalinViewModel(viewModel).picHeight * 1.4}%"
            preserveAspectRatio="true"
        />
        <text x="4.8%" y="{5 / viewModel.viewPortHeight * viewModel.viewPortWidth}%" transform="translate(10, 4)">
          <tspan class="small">{formatWeight(getMonsterFalinViewModel(viewModel).weight)}lbs</tspan>
        </text>

        {#each viewModel.femaleCharacters as charViewModel}
          <rect x="{charViewModel.x}%" y="{charViewModel.immobilityThresholdY}%" width="{charViewModel.width}%" height="0.8%" rx="0.5px" ry="0.5px" stroke="white" stroke-width="0.4" stroke-linecap="round" fill="black" on:click={() => selectChar(charViewModel.name)} />

          <rect x="{charViewModel.x}%" y="{charViewModel.y}%" width="{charViewModel.width}%" height="{charViewModel.height}%" rx="0.5px" ry="0.5px" stroke="white" stroke-width="0.4" stroke-linecap="round" fill="url(#{charViewModel.barGradient})" on:click={() => selectChar(charViewModel.name)} />
          <image
            xlink:href="{charViewModel.pictureLink}"
            x="{charViewModel.x}%"
            y="{charViewModel.y + charViewModel.height + 1}%"
            height="{charViewModel.picHeight}%"
            preserveAspectRatio="true"
          />
          <WeightLabel charViewModel="{charViewModel}" />
        {/each}

        <image x="0%" y="0%" height="8%" xlink:href="{cornerSvg}" />
        <image x="0%" y="0%" height="8%" xlink:href="{cornerSvg}" transform='scale(-1, 1)' transform-origin="center"/>
        <image x="0%" y="0%" height="8%" xlink:href="{cornerSvg}" transform='scale(1, -1)' transform-origin="center"/>
        <image x="0%" y="0%" height="8%" xlink:href="{cornerSvg}" transform='scale(-1, -1)' transform-origin="center"/>
        <rect x="{`${8 * viewModel.viewPortHeight / viewModel.viewPortWidth - 0.2}%`}" y="0" height="1.4%" width="{`${100 - 2 * 8 * viewModel.viewPortHeight / viewModel.viewPortWidth + 0.4}%`}" fill="#ae2f29" />
        <rect x="{`${8 * viewModel.viewPortHeight / viewModel.viewPortWidth - 0.2}%`}" y="1.7%" height="0.75%" width="{`${100 - 2 * 8 * viewModel.viewPortHeight / viewModel.viewPortWidth + 0.4}%`}" fill="#ae2f29" />

        <rect x="0%" y="98.6%" height="1.5%" width="100%" fill="#ae2f29" />
        <rect x="{`${8 * viewModel.viewPortHeight / viewModel.viewPortWidth - 0.2}%`}" y="97.55%" height="0.75%" width="{`${100 - 2 * 8 * viewModel.viewPortHeight / viewModel.viewPortWidth + 0.4}%`}" fill="#ae2f29" />

        <rect x="0%" y="7.8%" height="84.4%" width="0.65%" fill="#ae2f29" />
        <rect x="0.8%" y="7.8%" height="84.4%" width="0.4%" fill="#ae2f29" />

        <rect x="99.35%" y="7.8%" height="84.4%" width="0.65%" fill="#ae2f29" />
        <rect x="98.8%" y="7.8%" height="84.4%" width="0.4%" fill="#ae2f29" />

      </svg>

    {:catch error}
      <p>error: {error}</p>
    {/await}
  </main>

<style>
  .chart {
    display: block;
    background-color: #f9edd5;
  }

  .not-so-small {
    font-size: 4px;
    fill: black;
  }

  .small {
    font-size: 1.8px;
    fill: black;
  }

  .very-small {
    font-size: 1.4px;
    fill: black;
  }

  .link-tree-link {
    fill: blue;
    text-decoration: underline;
  }
</style>