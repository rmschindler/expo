/**
 * Calendar trigger inputs must have the "type" property set to one of these values
 */
export var CalendarTriggerTypes;
(function (CalendarTriggerTypes) {
    CalendarTriggerTypes["CALENDAR"] = "calendar";
    CalendarTriggerTypes["DAILY"] = "daily";
    CalendarTriggerTypes["WEEKLY"] = "weekly";
    CalendarTriggerTypes["YEARLY"] = "yearly";
    CalendarTriggerTypes["DATE"] = "date";
    CalendarTriggerTypes["TIME_INTERVAL"] = "timeInterval";
})(CalendarTriggerTypes || (CalendarTriggerTypes = {}));
/**
 * An enum corresponding to values appropriate for Android's [`Notification#priority`](https://developer.android.com/reference/android/app/Notification#priority) field.
 */
export var AndroidNotificationPriority;
(function (AndroidNotificationPriority) {
    AndroidNotificationPriority["MIN"] = "min";
    AndroidNotificationPriority["LOW"] = "low";
    AndroidNotificationPriority["DEFAULT"] = "default";
    AndroidNotificationPriority["HIGH"] = "high";
    AndroidNotificationPriority["MAX"] = "max";
})(AndroidNotificationPriority || (AndroidNotificationPriority = {}));
//# sourceMappingURL=Notifications.types.js.map