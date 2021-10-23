<style>
    body {
      scroll-behavior: smooth;
    }
    #page {
    }
    .a1000c-horizontal {
    }
    .a1000c-horizontal > .flex {
      flex-shrink: 0;
     }
     .nav {
      flex-shrink: 1;
      flex-basis: 5%;
      background-color: rgba(20,20,20,0.1);
     }
     .nav:hover {
      background-color: rgba(20,20,20,0.35);

     }
     .content {
      flex-shrink: 1;
      flex-basis: 95%;
     }
   .bg-a100c-1 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.15) 0%, rgba(255,117,0,0.15) 50%, rgba(255,0,35,0.15) 100%);
      width: 99vw;
   }
   .bg-a100c-2 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 50%, rgba(255,0,249,0.15) 100% );
      width: 105vw;
   }
   .bg-a100c-3 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,35,0.15) 0%, rgba(255,0,249,0.15) 50%, rgba(255,117,0,0.15) 100% );
   }
   h2 {
    display: inline-block;
    background-color: white;
    padding: 0 6px;
   }

</style>

<template>
<div id="page">
  <div class="flex a1000c-horizontal">
      <div id="map" class="flex min-h-screen bg-a100c-1 sm:items-center sm:pt-0">
        <div class="flex content items-center justify-center">
          <h2>Map</h2>
        </div>
        <div class="nav flex items-center justify-center">
            <a href="#list" class="text-white font-bold" style="color:white;">&gt;</a>
        </div>
      </div>
      <div id="list" class="flex min-h-screen bg-a100c-2 sm:items-center sm:pt-0">
        <div class="nav flex items-center justify-center">
          <a href="#map" class="text-white font-bold">&lt;</a>
        </div>
        <div class=" content flex items-center justify-center">
          <h2>List</h2>
        </div>
      </div>
  </div>
</div>
</template>
