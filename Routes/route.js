import express from "express";

export const homeRoute = async (req, res) => {
  res.render("index.ejs", { url: null });
};