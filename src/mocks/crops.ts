import type { Crop } from '@/modules/crops/types'

import vineyardNorth1 from '@/assets/images/crops/vineyardNorth1.jpg'
import vineyardNorth2 from '@/assets/images/crops/vineyardNorth2.jpg'
import vineyardNorth3 from '@/assets/images/crops/vineyardNorth3.jpg'
import vineyardSouth1 from '@/assets/images/crops/vineyardSouth1.jpg'

import greenhouseTomatoes1 from '@/assets/images/crops/greenhouseTomatoes1.jpg'
import greenhouseTomatoes2 from '@/assets/images/crops/greenhouseTomatoes2.jpg'
import greenhouseTomatoes3 from '@/assets/images/crops/greenhouseTomatoes3.jpg'
import greenhouseTomatoes4 from '@/assets/images/crops/greenhouseTomatoes4.jpg'
import greenhouseStrawberries1 from '@/assets/images/crops/greenhouseStrawberries1.jpg'
import greenhouseStrawberries2 from '@/assets/images/crops/greenhouseStrawberries2.jpg'

import fieldsCorn1 from '@/assets/images/crops/fieldsCorn1.jpg'
import fieldsCorn2 from '@/assets/images/crops/fieldsCorn2.jpg'
import fieldsPotatoes1 from '@/assets/images/crops/fieldsPotatoes1.jpg'
import fieldsPotatoes2 from '@/assets/images/crops/fieldsPotatoes2.jpg'
import fieldsPotatoes3 from '@/assets/images/crops/fieldsPotatoes3.jpg'

export const crops: Crop[] = [
  {
    id: 'vineyard-north',
    businessLineId: 'vineyard',
    name: 'North Vineyard',
    type: 'Grapes',
    location: 'North Field',
    images: [
      {
        id: 'vineyard-north-1',
        url: vineyardNorth1,
      },
      {
        id: 'vineyard-north-2',
        url: vineyardNorth2,
      },
      {
        id: 'vineyard-north-3',
        url: vineyardNorth3,
      },
    ],
    coverImageId: 'vineyard-north-1',
    status: 'active',
    assignedUserIds: ['vineyard-worker', 'vineyard-worker-2', 'vineyard-worker-3'],
    optimalConditions: {
      temperature: { min: 18, max: 28 },
      humidity: { min: 55, max: 75 },
      soilMoisture: { min: 40, max: 65 },
      ph: { min: 5.5, max: 6.5 },
    },
  },
  {
    id: 'vineyard-south',
    businessLineId: 'vineyard',
    name: 'South Vineyard',
    type: 'Grapes',
    location: 'South Field',
    images: [
      {
        id: 'vineyard-south-1',
        url: vineyardSouth1,
      },
    ],
    coverImageId: 'vineyard-south-1',
    status: 'active',
    assignedUserIds: ['vineyard-worker-2'],
    optimalConditions: {
      temperature: { min: 18, max: 28 },
      humidity: { min: 55, max: 75 },
      soilMoisture: { min: 40, max: 65 },
      ph: { min: 5.5, max: 6.5 },
    },
  },
  {
    id: 'vineyard-test001',
    businessLineId: 'vineyard',
    name: 'Test 001 Vineyard',
    type: 'Grapes',
    location: 'South Field',
    images: [
      {
        id: 'vineyard-test001-1',
        url: vineyardSouth1,
      },
    ],
    coverImageId: 'vineyard-test001-1',
    status: 'active',
    assignedUserIds: ['vineyard-worker', 'vineyard-worker-2', 'vineyard-worker-3'],
    optimalConditions: {
      temperature: { min: 18, max: 28 },
      humidity: { min: 55, max: 75 },
      soilMoisture: { min: 40, max: 65 },
      ph: { min: 5.5, max: 6.5 },
    },
  },
  {
    id: 'vineyard-test002',
    businessLineId: 'vineyard',
    name: 'Test 002 Vineyard',
    type: 'Grapes',
    location: 'South Field',
    images: [
      {
        id: 'vineyard-test002-1',
        url: vineyardSouth1,
      },
    ],
    coverImageId: 'vineyard-test002-1',
    status: 'active',
    assignedUserIds: ['vineyard-worker-3'],
    optimalConditions: {
      temperature: { min: 18, max: 28 },
      humidity: { min: 55, max: 75 },
      soilMoisture: { min: 40, max: 65 },
      ph: { min: 5.5, max: 6.5 },
    },
  },
  {
    id: 'vineyard-test003',
    businessLineId: 'vineyard',
    name: 'Test 003 Vineyard',
    type: 'Grapes',
    location: 'South Field',
    images: [
      {
        id: 'vineyard-test003-1',
        url: vineyardSouth1,
      },
    ],
    coverImageId: 'vineyard-test003-1',
    status: 'active',
    assignedUserIds: ['vineyard-worker', 'vineyard-worker-2'],
    optimalConditions: {
      temperature: { min: 18, max: 28 },
      humidity: { min: 55, max: 75 },
      soilMoisture: { min: 40, max: 65 },
      ph: { min: 5.5, max: 6.5 },
    },
  },
  {
    id: 'greenhouse-tomatoes',
    businessLineId: 'greenhouse',
    name: 'Tomato Greenhouse',
    type: 'Tomatoes',
    location: 'Greenhouse A',
    images: [
      {
        id: 'greenhouse-tomatoes-1',
        url: greenhouseTomatoes1,
      },
      {
        id: 'greenhouse-tomatoes-2',
        url: greenhouseTomatoes2,
      },
      {
        id: 'greenhouse-tomatoes-3',
        url: greenhouseTomatoes3,
      },
      {
        id: 'greenhouse-tomatoes-4',
        url: greenhouseTomatoes4,
      },
    ],
    coverImageId: 'greenhouse-tomatoes-1',
    status: 'active',
    assignedUserIds: ['greenhouse-worker', 'greenhouse-worker-2', 'greenhouse-worker-3'],
    optimalConditions: {
      temperature: { min: 20, max: 27 },
      humidity: { min: 60, max: 75 },
      soilMoisture: { min: 60, max: 80 },
      ph: { min: 5.5, max: 6.8 },
    },
  },
  {
    id: 'greenhouse-strawberries',
    businessLineId: 'greenhouse',
    name: 'Strawberry Greenhouse',
    type: 'Strawberries',
    location: 'Greenhouse B',
    images: [
      {
        id: 'greenhouse-strawberries-1',
        url: greenhouseStrawberries1,
      },
      {
        id: 'greenhouse-strawberries-2',
        url: greenhouseStrawberries2,
      },
    ],
    coverImageId: 'greenhouse-strawberries-1',
    status: 'active',
    assignedUserIds: ['greenhouse-worker-2', 'greenhouse-worker-3'],
    optimalConditions: {
      temperature: { min: 16, max: 24 },
      humidity: { min: 60, max: 75 },
      soilMoisture: { min: 55, max: 75 },
      ph: { min: 5.5, max: 6.5 },
    },
  },
  {
    id: 'fields-potatoes',
    businessLineId: 'fields',
    name: 'Potato Field',
    type: 'Potatoes',
    location: 'Field 1',
    images: [
      {
        id: 'fields-potatoes-1',
        url: fieldsPotatoes1,
      },
      {
        id: 'fields-potatoes-2',
        url: fieldsPotatoes2,
      },
      {
        id: 'fields-potatoes-3',
        url: fieldsPotatoes3,
      },
    ],
    coverImageId: 'fields-potatoes-1',
    status: 'active',
    assignedUserIds: ['fields-worker', 'fields-worker-2', 'fields-worker-3'],
    optimalConditions: {
      temperature: { min: 15, max: 22 },
      humidity: { min: 60, max: 80 },
      soilMoisture: { min: 50, max: 70 },
      ph: { min: 5, max: 6.5 },
    },
  },
  {
    id: 'fields-corn',
    businessLineId: 'fields',
    name: 'Corn Field',
    type: 'Corn',
    location: 'Field 2',
    images: [
      {
        id: 'fields-corn-1',
        url: fieldsCorn1,
      },
      {
        id: 'fields-corn-2',
        url: fieldsCorn2,
      },
    ],
    coverImageId: 'fields-corn-1',
    status: 'active',
    assignedUserIds: ['fields-worker', 'fields-worker-2'],
    optimalConditions: {
      temperature: { min: 18, max: 30 },
      humidity: { min: 50, max: 70 },
      soilMoisture: { min: 45, max: 65 },
      ph: { min: 5.8, max: 7 },
    },
  },
]
