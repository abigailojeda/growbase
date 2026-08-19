<script lang="ts" src="./Index.ts"></script>

<template>
  <h1 class="text-2xl mb-6 font-semibold text-text">Summary</h1>
  <section>
    <div class="grid grid-cols-1 gap-8 xl:grid-cols-2">
      <CropsNeedingAttention :crops="cropsNeedingAttentionList" />

      <div>
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <SummaryCard label="Total crops" :value="totalCrops" />

          <SummaryCard label="Active crops" :value="activeCrops" variant="primary" />

          <SummaryCard
            label="Needs attention"
            :value="cropsNeedingAttention"
            :variant="cropsNeedingAttention ? 'warning' : 'default'"
          />
        </div>

        <div class="mt-8">
          <CropHealthOverview :counts="healthCounts" />
        </div>
      </div>
    </div>

    <div class="mt-8">
      <TaskStatusOverview
        :title="isAdmin ? 'Task overview' : 'My tasks'"
        :summary="taskSummary"
        :tasks="tasks"
        :workers="isAdmin ? workers : []"
      />
    </div>

    <div v-if="isAdmin" class="mt-8">
      <TeamOverview :workers="teamSummaries" />
    </div>
  </section>
</template>
