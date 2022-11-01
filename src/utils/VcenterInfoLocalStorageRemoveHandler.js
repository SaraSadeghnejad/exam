const VcenterInfoLocalStorageRemoveHandler = () => {
    localStorage.removeItem("library_item");
    localStorage.removeItem("osName");
    localStorage.removeItem("v_label");
    localStorage.removeItem("v_password");
    localStorage.removeItem("v_password_confirmation");
    localStorage.removeItem("v_hostname");
    localStorage.removeItem("package_id");
    localStorage.removeItem("package");
    localStorage.removeItem("invoice_id");
    localStorage.removeItem("firewall");
    localStorage.removeItem("network");
}

export default VcenterInfoLocalStorageRemoveHandler;