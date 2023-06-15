
export interface FolderRO {
  id: string;
  alias: string;
  description?: string;
  color: string;
  icon?: string;
  sort?: number;
  parentFolderId?: string;
}

export interface ApplicationRO {
  id: string;
  alias: string;
  type: ApplicationType;
  instanceCount: number;
  description?: string;
  color: string;
  icon?: string;
  sort?: number;
  parentFolderId?: string;
}

export interface InstanceRO {
  id: string;
  hostname?: string;
  alias?: string;
  actuatorUrl: string;
  parentApplicationId: string;
  description?: string;
  color: string;
  icon?: string;
  sort?: number;
  demo: boolean;
}

export type ApplicationType = 'SPRING_BOOT';