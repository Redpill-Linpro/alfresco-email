/**
 * 
 * Adds an action url substitution for {mailtoLink} which links to a document details page.
 * 
 * @param {type} _getActionUrls
 * @returns {undefined}
 */
(function(_getActionUrls) {

  getActionUrls = function (record, siteId) {
    var actionUrls = _getActionUrls.call(this, record, siteId);

    var jsNode = record.jsNode,
      nodeRef = jsNode.isLink ? jsNode.linkedNode.nodeRef : jsNode.nodeRef,
      nodeRef = jsNode.isLink && !$isValueSet(nodeRef) ? "invalidlink" : nodeRef,
      strNodeRef = nodeRef.toString(),
      nodeRefUri = nodeRef.uri,
      contentUrl = jsNode.contentURL,
      workingCopy = record.workingCopy || {},
      recordSiteId = Alfresco.util.isValueSet(record.location.site) ? record.location.site.name : null,
      fnPageURL = Alfresco.util.bind(function(page)
      {
         return Alfresco.util.siteURL(page,
         {
            site: YAHOO.lang.isString(siteId) ? siteId : recordSiteId
         });
      }, this);

    var currentBrowserBaseUrl = window.location.protocol + "//" +window.location.host;    
    var currentMailToLink = "mailto:?subject=" + encodeURIComponent(jsNode.properties.cm_name) + "&amp;body=" + encodeURIComponent(Alfresco.util.combinePaths(currentBrowserBaseUrl, fnPageURL("document-details?nodeRef=" + strNodeRef)));
    actionUrls.mailtoLink = currentMailToLink;
    return actionUrls;
  };
  
  if (Alfresco.DocumentActions) {
    Alfresco.DocumentActions.prototype.getActionUrls = getActionUrls;
  }
  if (Alfresco.DocumentList) {
    Alfresco.DocumentList.prototype.getActionUrls = getActionUrls;
  }
}(Alfresco.doclib.Actions.prototype.getActionUrls));