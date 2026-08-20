<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="rounded-xl bg-surface p-6">
    <h2 class="text-2xl font-semibold text-text">Report history</h2>

    <p v-if="!reports.length" class="mt-6 text-sm text-text/60">
      No reports have been submitted for this crop yet.
    </p>

    <div v-else class="relative mt-6">
      <div class="flex flex-col gap-6">
        <CropReportItem
          v-for="(report, index) in reports"
          :key="report.id"
          :report="report"
          :crop="crop"
          :reporter-name="getReporterName(report.reportedBy)"
          :expanded="expandedReportId === report.id"
          :is-last="index === reports.length - 1"
          @toggle="toggleReport(report.id)"
        />
      </div>
    </div>
  </section>
</template>
