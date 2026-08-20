<script lang="ts" src="./Index.ts"></script>

<template>
  <h1 class="text-2xl mb-6 font-semibold text-text">Summary</h1>
  <section>
    <div class="grid grid-cols-1 gap-8 xl:grid-cols-2">
      <CropsNeedingAttention :crops="cropsNeedingAttentionList" />

      <div
        class="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(220px,0.7fr)_minmax(320px,1.3fr)]"
      >
        <div class="flex flex-col gap-4">
          <SummaryCard label="Total crops" :value="totalCrops" />

          <SummaryCard label="Active crops" :value="activeCrops" variant="primary" />

          <SummaryCard
            label="Needs attention"
            :value="cropsNeedingAttention"
            :variant="cropsNeedingAttention ? 'warning' : 'default'"
          />
        </div>

        <CropHealthOverview :counts="healthCounts" />
      </div>
    </div>

    <div v-if="isAdmin" class="mt-8">
      <TeamOverview :workers="teamSummaries" />
    </div>

    <div class="mt-8">
      <TaskStatusOverview
        :title="isAdmin ? 'Task overview' : 'My tasks'"
        :summary="taskSummary"
        :tasks="tasks"
        :workers="isAdmin ? workers : []"
      />
    </div>
  </section>
</template>
