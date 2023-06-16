import * as repl from 'repl';
import { ItemRO, ItemType } from '../definitions/daemon';
import {
  ApplicationRO,
  FolderRO,
  InstanceRO,
} from '../common/generated_definitions';
import { generatePath } from 'react-router-dom';
import { urls } from '../routes/urls';
import { ReactNode } from 'react';

export function isApplication(item: ItemRO): item is ApplicationRO {
  return 'type' in item;
}

export function isInstance(item: ItemRO): item is InstanceRO {
  return 'actuatorUrl' in item;
}

export function isFolder(item: ItemRO): item is FolderRO {
  return !isApplication(item) && !isInstance(item);
}

export const getItemType = (item: ItemRO): ItemType => {
  if (isApplication(item)) {
    return 'application';
  }
  if (isFolder(item)) {
    return 'folder';
  }
  if (isInstance(item)) {
    return 'instance';
  }
  throw new Error(`Unknown item type`);
};

export const getItemDisplayName = (item: ItemRO): string => {
  if (isApplication(item)) {
    return item.alias;
  }
  if (isFolder(item)) {
    return item.alias;
  }
  if (isInstance(item)) {
    return (
      item.alias ||
      item.hostname ||
      item.actuatorUrl
        .replace(/^https?:\/\//i, '') // Remove protocol
        .replace(/\/.*$/, '') // Remove path
    );
  }
  throw new Error(`Unknown item type`);
};

export const getItemParentId = (item: ItemRO): string | undefined => {
  if (isApplication(item)) {
    return item.parentFolderId;
  }
  if (isFolder(item)) {
    return item.parentFolderId;
  }
  if (isInstance(item)) {
    return item.parentApplicationId;
  }
  throw new Error(`Unknown item type`);
};

export const getItemTypeIcon = (itemType: ItemType): string => {
  switch (itemType) {
    case 'folder':
      return 'FolderOutlined';
    case 'application':
      return 'CloudOutlined';
    case 'instance':
      return 'DnsOutlined';
    default:
      throw new Error(`Unknown item type`);
  }
};

export const getItemTypeTextId = (itemType: ItemType): string => {
  switch (itemType) {
    case 'folder':
      return 'folder';
    case 'application':
      return 'application';
    case 'instance':
      return 'instance';
    default:
      throw new Error(`Unknown item type`);
  }
};

export const getItemUrl = (item: ItemRO): string => {
  const itemType = getItemType(item);
  switch (itemType) {
    case 'folder':
      return generatePath(urls.folder.url, { id: item.id });
    case 'application':
      return generatePath(urls.application.url, { id: item.id });
    case 'instance':
      return generatePath(urls.instance.url, { id: item.id });
    default:
      throw new Error(`Unknown item type`);
  }
};

export const getItemNameTooltip = (item: ItemRO): ReactNode | undefined => {
  if (isInstance(item)) {
    return item.actuatorUrl;
  }
  return undefined;
};

export const isItemDemo = (item: ItemRO): boolean => {
  if (isApplication(item)) {
    return item.demo;
  }
  if (isInstance(item)) {
    return item.demo;
  }
  return false;
};

export const isItemUpdatable = (item: ItemRO): boolean => {
  return !isItemDemo(item);
};

export const isItemDeletable = (item: ItemRO): boolean => {
  return !isItemDemo(item);
};

export const getActuatorUrls = (value: string): string[] => {
  return value
    .split(/[,\n ]/)
    .map((url) => url.trim())
    .filter((url) => url.length > 0);
};
